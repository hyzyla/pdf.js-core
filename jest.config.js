/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
module.exports = {
  clearMocks: true,
  testEnvironment: "jsdom",
  testMatch: ["**/tests/**/*.js"],
};
