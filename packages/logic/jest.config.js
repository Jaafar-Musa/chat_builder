module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
     setupFilesAfterEnv: ['<rootDir>/src/utils/testEnv.ts'],
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
  };