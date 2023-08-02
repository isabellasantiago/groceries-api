import IProducts from "../common/entities/interfaces/Products";

export interface IDb {
    create(data: IProducts): Promise<IProducts>
    findProduct(query: string): Promise<Array<IProducts>>
    productExists(code_bar: string): Promise<IProducts | null>
}