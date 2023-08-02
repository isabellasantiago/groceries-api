"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaMock = void 0;
const jest_mock_extended_1 = require("jest-mock-extended");
const client_1 = require("./client");
const globals_1 = require("@jest/globals");
globals_1.jest.mock('./client', () => ({
    __esModule: true,
    default: (0, jest_mock_extended_1.mockDeep)(),
}));
(0, globals_1.beforeEach)(() => {
    (0, jest_mock_extended_1.mockReset)(exports.prismaMock);
});
exports.prismaMock = client_1.client;
//# sourceMappingURL=singleton.js.map