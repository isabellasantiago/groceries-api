import { PrismaClient } from "@prisma/client";
import IProducts from "../common/entities/interfaces/Products";
import { IDb } from "./db.interface";

export class DbRepository implements IDb{
    client: PrismaClient = new PrismaClient();

    async create(data: IProducts): Promise<IProducts> {
        return await this.client.products.create({ data });
    }

    async findProduct(query: string): Promise<Array<IProducts>> {
        return await this.client.products.findMany({
            where: {
                description: {
                    contains: query
                }
            }
        })
    }

    async productExists(code_bar: string): Promise<IProducts | null> {
        return await this.client.products.findFirst({
            where: { code_bar }
        })
    }
}