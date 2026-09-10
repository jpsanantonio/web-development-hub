// Flat config, so `eslint` works directly rather than only through the
// deprecated `next lint` wrapper. `next lint` also defaulted to a fixed set of
// directories, which silently left contexts/, hooks/ and constants/ unlinted.
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const config = [
  {
    // Build output and tool caches, none of it authored here.
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
      '.wrangler/**',
      '.vercel/**',
      'next-env.d.ts',
    ],
  },
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    // Playwright's runner, not the browser bundle.
    files: ['e2e/**/*.ts', '*.config.*', 'scripts/**/*.mjs'],
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
];

export default config;
