
import readline from 'readline';
import IProducts from "../common/entities/interfaces/Products";
import { IDb } from "../repository/db.interface";
import { IProductsServices } from "./products.interface";
import DbRepository from '../repository/db';


export default class ProductsServices implements IProductsServices {
    private readonly dbRepository: IDb = new DbRepository();
    constructor() { }

    async postFile(readableFile: any): Promise<Array<IProducts>> {
        console.log('bateu service')
        
        console.log('cheguei aqui')

        const productsLine = readline.createInterface({
            input: readableFile
        })

        console.log('cheguei aqui 2', productsLine)

        const products: Array<IProducts> = [];

        for await (let line of productsLine) {
            const productsLineSplit = line.split(',');

            products.push({
                code_bar: productsLineSplit[0],
                description: productsLineSplit[1],
                price: Number(productsLineSplit[2]),
                quantity: Number(productsLineSplit[3]),
                img_link: productsLineSplit[4]
            })
        }

        for await (let { code_bar, description, price, quantity, img_link } of products) {
            const productExists = await this.dbRepository.productExists(code_bar)

            if (!productExists) {
                await this.dbRepository.create({
                    code_bar,
                    description,
                    price,
                    quantity,
                    img_link
                })
            }
        }

        return products
    }

    async findProduct(query: string): Promise<Array<IProducts>> {
        return this.dbRepository.findProduct(query)
    }
}