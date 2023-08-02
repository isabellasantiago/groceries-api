import { jest, describe } from '@jest/globals';
import IProductsController from './interfaces/products';

const { readFile, searchData } = jest.requireActual<IProductsController>("../controllers/products.controller.ts")

describe('Products Controller', () => {
    it('')
})