module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"], // for type-aware rules
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // TS rules
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // type-aware
    "prettier", // turns off conflicts with Prettier
  ],
  rules: {
    // your custom overrides:
    "@typescript-eslint/explicit-function-return-type": "off",
    "prettier/prettier": "error",
  },
  ignorePatterns: ["node_modules/", "dist/", ".next/", "coverage/"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // e.g. allow TS non-null assertions
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  ],
};
