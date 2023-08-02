"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    bail: false,
    clearMocks: true,
    preset: 'ts-jest',
    testMatch: [
        "**/__tests__/**.test.ts"
    ],
    setupFilesAfterEnv: ['<rootDir>/src/database/singleton.ts'],
    testEnvironment: 'node'
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map