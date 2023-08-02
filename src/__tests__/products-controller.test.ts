import { jest, describe } from '@jest/globals';
import IProductsController from '../controllers/interfaces/products';

const { readFile, searchData } = jest.requireActual<IProductsController>("../controllers/products.controller.ts")

describe('Products Controller', () =>{
    
})