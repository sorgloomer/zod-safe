import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/*.test.ts',
  ],
  moduleNameMapper: {
    "^tsconfig\\.json$": "<rootDir>/$0",
    "^(?:src|test)(?:/.*)?$": "<rootDir>/$0",
  },
};
export default config;
