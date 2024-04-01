import { JestConfigWithTsJest } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

const config: JestConfigWithTsJest = {
  bail: 1,
  cacheDirectory: "/tmp/jest_rt",
  collectCoverageFrom: [
    "<rootDir>/src/**",
    "!node_modules",
    "!**/node_modules/**",
    "!**/*.test*",
  ],
  coverageDirectory: "./__coverage__",
  displayName: "SSR Typescript react",
  extensionsToTreatAsEsm: [".ts"],
  moduleFileExtensions: ["js", "ts"],
  preset: "ts-jest/presets/default-esm",
  prettierPath: "./node_modules/prettier",
  rootDir: "./",
  roots: ["./tests"],
  testEnvironment: "node",
  testRegex: "^.*test\\.ts$",
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: {
          ...compilerOptions,
          esModuleInterop: true,
          allowImportingTsExtensions: false,
        },

        compiler: "typescript",
        useESM: true,
      },
    ],
  },
};

export default config;
