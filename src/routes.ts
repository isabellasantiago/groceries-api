import { Router } from 'express';

import multer from 'multer';

import ProductsController from './controllers/products.controller';

const multerConfig = multer();

const router = Router();
const controller = new ProductsController();

router.post('/api/files', multerConfig.single("file"), controller.readFile)

router.get('/api/users', controller.searchData)

export { router };