module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint/eslint-plugin"],
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  rules: {
    semi: ["off"],
    quotes: ["error", "double", { avoidEscape: false, allowTemplateLiterals: true }],
    "prefer-const": "error",
    "comma-dangle": ["warn", "only-multiline"],
    "no-restricted-imports": ["error", { patterns: ["./*", "../*"] }],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "no-console": "error",
  },
  ignorePatterns: [".eslintrc.js"],
};
