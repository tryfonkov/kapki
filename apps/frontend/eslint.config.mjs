import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

const config = [
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ),
];

export default config;
