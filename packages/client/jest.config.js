/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageProvider: "v8",
  transform: {
    "<transform_regex>": ['ts-jest', { /* ts-jest config goes here in Jest */ }],
  }
};

module.exports = config;
