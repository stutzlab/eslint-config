// ESLint 9 flat config format
import baseConfig from '@stutzlab/eslint-config';

export default [
  {
    ignores: [
      '**/*.config.js',
      '.eslintrc.js',
      'node_modules/**',
      'dist/**',
    ],
  },
  ...baseConfig,
  {
    files: [ '**/*.{ts,js}' ],
    languageOptions: {
      parserOptions: {
        project: [ './tsconfig.json' ],
        tsconfigRootDir: process.cwd(),
      },
    },
  },
];

