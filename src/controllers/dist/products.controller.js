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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
var stream_1 = require("stream");
var readline_1 = require("readline");
var client_1 = require("../database/client");
var ProductsController = /** @class */ (function () {
    function ProductsController() {
    }
    ProductsController.prototype.readFile = function (request, response) {
        var e_1, _a, e_2, _b;
        return __awaiter(this, void 0, Promise, function () {
            var file, readableFile, productsLine, products, productsLine_1, productsLine_1_1, line, productsLineSplit, e_1_1, products_1, products_1_1, _c, code_bar, description, price, quantity, img_link, productExists, e_2_1, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 26, , 27]);
                        file = request.file;
                        readableFile = new stream_1.Readable();
                        readableFile.push(file === null || file === void 0 ? void 0 : file.buffer);
                        readableFile.push(null);
                        productsLine = readline_1["default"].createInterface({
                            input: readableFile
                        });
                        products = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 12]);
                        productsLine_1 = __asyncValues(productsLine);
                        _d.label = 2;
                    case 2: return [4 /*yield*/, productsLine_1.next()];
                    case 3:
                        if (!(productsLine_1_1 = _d.sent(), !productsLine_1_1.done)) return [3 /*break*/, 5];
                        line = productsLine_1_1.value;
                        productsLineSplit = line.split(',');
                        products.push({
                            code_bar: productsLineSplit[0],
                            description: productsLineSplit[1],
                            price: Number(productsLineSplit[2]),
                            quantity: Number(productsLineSplit[3]),
                            img_link: productsLineSplit[4]
                        });
                        _d.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _d.trys.push([7, , 10, 11]);
                        if (!(productsLine_1_1 && !productsLine_1_1.done && (_a = productsLine_1["return"]))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _a.call(productsLine_1)];
                    case 8:
                        _d.sent();
                        _d.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12:
                        _d.trys.push([12, 19, 20, 25]);
                        products_1 = __asyncValues(products);
                        _d.label = 13;
                    case 13: return [4 /*yield*/, products_1.next()];
                    case 14:
                        if (!(products_1_1 = _d.sent(), !products_1_1.done)) return [3 /*break*/, 18];
                        _c = products_1_1.value, code_bar = _c.code_bar, description = _c.description, price = _c.price, quantity = _c.quantity, img_link = _c.img_link;
                        return [4 /*yield*/, client_1.client.products.findFirst({
                                where: { code_bar: code_bar }
                            })];
                    case 15:
                        productExists = _d.sent();
                        if (!!productExists) return [3 /*break*/, 17];
                        return [4 /*yield*/, client_1.client.products.create({
                                data: {
                                    code_bar: code_bar,
                                    description: description,
                                    price: price,
                                    quantity: quantity,
                                    img_link: img_link
                                }
                            })];
                    case 16:
                        _d.sent();
                        _d.label = 17;
                    case 17: return [3 /*break*/, 13];
                    case 18: return [3 /*break*/, 25];
                    case 19:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 25];
                    case 20:
                        _d.trys.push([20, , 23, 24]);
                        if (!(products_1_1 && !products_1_1.done && (_b = products_1["return"]))) return [3 /*break*/, 22];
                        return [4 /*yield*/, _b.call(products_1)];
                    case 21:
                        _d.sent();
                        _d.label = 22;
                    case 22: return [3 /*break*/, 24];
                    case 23:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 24: return [7 /*endfinally*/];
                    case 25: return [2 /*return*/, response.json(products)];
                    case 26:
                        error_1 = _d.sent();
                        return [2 /*return*/, response.json({ error: error_1 })];
                    case 27: return [2 /*return*/];
                }
            });
        });
    };
    ProductsController.prototype.searchData = function (request, response) {
        return __awaiter(this, void 0, Promise, function () {
            var query, products, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = request.query.q;
                        return [4 /*yield*/, client_1.client.products.findMany({
                                where: {
                                    description: {
                                        contains: String(query)
                                    }
                                }
                            })];
                    case 1:
                        products = _a.sent();
                        return [2 /*return*/, response.json(products)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, response.json(error_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ProductsController;
}());
exports["default"] = ProductsController;
