// eslint-disable-next-line no-undef
module.exports = {
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/contexts/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/model/**/*',
    '!<rootDir>/node_modules/',
  ],

  coveragePathIgnorePatterns: ['/node_modules/', '/public/'],

  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
};
