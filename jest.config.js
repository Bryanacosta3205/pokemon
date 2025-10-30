const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^@/app/(.*)$": "<rootDir>/app/$1",
    "^@/components/(.*)$": "<rootDir>/app/components/$1",
    "^@/lib/(.*)$": "<rootDir>/app/lib/$1",
  },
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/*.d.ts",
    "!app/**/*.stories.{ts,tsx}",
    "!app/**/_*.{ts,tsx}",
  ],
  testMatch: [
    "<rootDir>/**/__tests__/**/*.{ts,tsx}",
    "<rootDir>/**/*.{spec,test}.{ts,tsx}",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/out/",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};

module.exports = createJestConfig(customJestConfig);
