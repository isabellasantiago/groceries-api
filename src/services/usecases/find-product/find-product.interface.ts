import { IDb, DbRepository } from "../../../repository";
import { IFindProductUC } from './find-product.usecase';
import IProducts from '../../../common/entities/interfaces/Products';


export class FindProductUseCase implements IFindProductUC {
    private readonly dbRepository: IDb = new DbRepository();
    constructor() { }

    async findProduct(query: string): Promise<Array<IProducts>> {
        return this.dbRepository.findProduct(query)
    }
}