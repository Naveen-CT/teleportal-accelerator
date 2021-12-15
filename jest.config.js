module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['!node_modules/react-native'],
  testPathIgnorePatterns: ['<rootDir>/e2e'],
  timers: 'fake',
  setupFilesAfterEnv: ['./setupJest.js'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/index.{js,jsx,ts,tsx}',
    '!src/app/component-template/**/*',
    '!src/**/*.story.tsx',
    '!src/**/*.enums.ts',
    '!src/**/*.interface.ts',
    '!src/style/**/*',
    '!src/assets/**/*',
    '!src/constants/**/*',
    '!storybook/**/*',
    '!**/node_modules/**'
  ],
  testResultsProcessor: 'jest-sonar-reporter'
};
