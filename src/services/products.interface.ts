import IProducts from "../common/entities/interfaces/Products";

export interface IProductsServices {
    postFile(file: any): Promise<Array<IProducts>>
    findProduct(query: string): Promise<Array<IProducts>>
}