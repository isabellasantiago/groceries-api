import { Request, Response } from "express";
import { Readable } from 'stream';
import readline from 'readline';
import IProductsController from "./interfaces/products";
import IProducts from "../entities/interfaces/Products";
import { client } from "../database/client";

export default class ProductsController implements IProductsController {    
    async readFile(request: Request, response: Response): Promise<Response> {
        try{
            const { file } = request;

            const readableFile = new Readable();
            readableFile.push(file?.buffer);
            readableFile.push(null);

            const productsLine = readline.createInterface({
                input: readableFile
            })

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
                const productExists = await client.products.findFirst({
                    where: { code_bar }
                })

                if (!productExists) {
                    await client.products.create({
                        data: {
                            code_bar,
                            description,
                            price,
                            quantity,
                            img_link
                        }
                    })
                }
            }

            return response.json(products);

        }catch(error){
            return response.json({ error })
        }
    }

    async searchData(request: Request, response: Response): Promise<Response> {
        try{
            const { q: query } = request.query;

            const products = await client.products.findMany({
                where: {
                    description: {
                        contains: String(query)
                    }
                }
            })

            return response.json(products);
        }catch(error){
            return response.json(error);
        }
    }
}