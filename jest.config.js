import { createDefaultEsmPreset  } from 'ts-jest';


/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  ...createDefaultEsmPreset(),
  testEnvironment: "node",
  maxWorkers: 1,
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};