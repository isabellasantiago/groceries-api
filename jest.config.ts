import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js, jsx}",
    "src/**/*.{ts,tsx}",
    "!vendor/**/*.{js,jsx}",
    "!**/node_modules/**"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    }
  },
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  bail: false,
  clearMocks: true,
  preset: 'ts-jest',
  testMatch: [
    "**/__tests__/**.test.ts"
  ],
  setupFilesAfterEnv: ['<rootDir>/src/database/singleton.ts'],
  testEnvironment: 'node',
  automock: true,
  verbose: true
};

export default config;
