import { Request, Response } from "express";

export default interface IProductsController {
    readFile(request: Request, response: Response): Promise<Response>
    searchData(request: Request, response: Response): Promise<Response>
}