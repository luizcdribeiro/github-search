const esModules = ['axios'].join('|');
module.exports = {
  testMatch: ['<rootDir>/src/tests/**/*.test.tsx'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
