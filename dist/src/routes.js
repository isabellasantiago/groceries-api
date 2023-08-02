"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const products_controller_1 = __importDefault(require("./controllers/products.controller"));
const multerConfig = (0, multer_1.default)();
const router = (0, express_1.Router)();
exports.router = router;
const controller = new products_controller_1.default();
router.post('/api/files', multerConfig.single("file"), controller.readFile);
router.get('/api/users', controller.searchData);
//# sourceMappingURL=routes.js.map