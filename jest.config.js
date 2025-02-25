module.exports = {
  preset: "ts-jest",
  //testEnvironment: "jest-environment-jsdom-fourteen",
  testEnvironment: "node",
  roots: ["<rootDir>/src/"],
  maxWorkers: 1,
  snapshotSerializers: ["jest-serializer-xml"],
  testPathIgnorePatterns:["helpers.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  globalSetup: "./test-setup.js",
};
