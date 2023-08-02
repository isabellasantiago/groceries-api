import { Request, Response } from 'express';
import ProductsController from './products.controller';
import { Readable } from 'stream';
import { prismaMock } from '../database/singleton';
import { productsMock } from './mocks/products.mock'

const mockRequest = {
    file: {
        buffer: Buffer.from('code1,description1,10.0,5,img1.jpg\n', 'utf-8'),
    },
} as Request;

const mockResponse = {
    json: jest.fn()
} as unknown as Response;

const productsController = new ProductsController();


describe('Products Controller', () => {
    it('Should read the file and create in database', async () => {
        const expectedStatusCode = 200;

        const mockReadableFile = new Readable();
        mockReadableFile.push(mockRequest.file?.buffer);
        mockReadableFile.push(null);

        prismaMock.products.findFirst.mockResolvedValueOnce(null);
        for (let product of productsMock) {
            prismaMock.products.create.mockResolvedValueOnce(product);
        }
        await productsController.readFile(mockRequest, mockResponse);
   
        expect(prismaMock.products.findFirst).toHaveBeenCalledTimes(1);
    })
})