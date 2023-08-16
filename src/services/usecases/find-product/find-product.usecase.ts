import IProducts from "../../../common/entities/interfaces/Products";

export interface IFindProductUC {
    findProduct(file: any): Promise<Array<IProducts>>
}