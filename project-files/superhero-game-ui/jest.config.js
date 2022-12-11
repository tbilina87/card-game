/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};
