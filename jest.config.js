// jest.config.js
module.exports = {
  transform: {
    ".(ts|js|tsx)": "ts-jest"
  },
  testEnvironment: "node",
  testPathIgnorePatterns: ['.vscode', 'dist', 'node_modules'],
  maxConcurrency: 1,
  testRegex: '(/test/.*|\\.?(test|spec))\\.(tsx?|jsx?)$',
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/test/"
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  collectCoverageFrom: [
    "src/*.{js,ts}"
  ]
};
