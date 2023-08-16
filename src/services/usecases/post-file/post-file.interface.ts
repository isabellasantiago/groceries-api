import IProducts from "../../../common/entities/interfaces/Products";

export interface IPostFileUC {
    postFile(file: any): Promise<Array<IProducts>>
}