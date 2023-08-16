import { Request, Response } from 'express';
import ProductsController from './products.controller';
import { Readable } from 'stream';

const mockClient = {
  products: {
    findFirst: jest.fn(),
    create: jest.fn(),
    findMany: jest.fn(),
  },
};

const mockRequest = {
    file: {
        buffer: Buffer.from('1234567898112,Chocolate,4.87,10,https://cdn.awsli.com.br/800x800/1957/1957771/produto/10935798577112288ec.jpg\n', 'utf-8'),
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

        await productsController.readFile(mockRequest, mockResponse);

        mockClient.products.findFirst.mockResolvedValueOnce(null);
        
   
        expect(mockClient.products.findFirst).toHaveBeenCalledTimes(1);
        expect(mockClient.products.create).toHaveBeenCalled();
    })
})