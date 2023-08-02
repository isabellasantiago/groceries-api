"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const readline_1 = __importDefault(require("readline"));
const client_1 = require("../database/client");
class ProductsController {
    readFile(request, response) {
        var _a, e_1, _b, _c, _d, e_2, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { file } = request;
                const readableFile = new stream_1.Readable();
                readableFile.push(file === null || file === void 0 ? void 0 : file.buffer);
                readableFile.push(null);
                const productsLine = readline_1.default.createInterface({
                    input: readableFile
                });
                const products = [];
                try {
                    for (var _g = true, productsLine_1 = __asyncValues(productsLine), productsLine_1_1; productsLine_1_1 = yield productsLine_1.next(), _a = productsLine_1_1.done, !_a; _g = true) {
                        _c = productsLine_1_1.value;
                        _g = false;
                        let line = _c;
                        const productsLineSplit = line.split(',');
                        products.push({
                            code_bar: productsLineSplit[0],
                            description: productsLineSplit[1],
                            price: Number(productsLineSplit[2]),
                            quantity: Number(productsLineSplit[3]),
                            img_link: productsLineSplit[4]
                        });
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_g && !_a && (_b = productsLine_1.return)) yield _b.call(productsLine_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                try {
                    for (var _h = true, products_1 = __asyncValues(products), products_1_1; products_1_1 = yield products_1.next(), _d = products_1_1.done, !_d; _h = true) {
                        _f = products_1_1.value;
                        _h = false;
                        let { code_bar, description, price, quantity, img_link } = _f;
                        const productExists = yield client_1.client.products.findFirst({
                            where: { code_bar }
                        });
                        if (!productExists) {
                            yield client_1.client.products.create({
                                data: {
                                    code_bar,
                                    description,
                                    price,
                                    quantity,
                                    img_link
                                }
                            });
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (!_h && !_d && (_e = products_1.return)) yield _e.call(products_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return response.json(products);
            }
            catch (error) {
                return response.json({ error });
            }
        });
    }
    searchData(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { q: query } = request.query;
                const products = yield client_1.client.products.findMany({
                    where: {
                        description: {
                            contains: String(query)
                        }
                    }
                });
                return response.json(products);
            }
            catch (error) {
                return response.json(error);
            }
        });
    }
}
exports.default = ProductsController;
//# sourceMappingURL=products.controller.js.map