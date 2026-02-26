# eslint-config

ESLint rules in 'Golang style' used by most of our projects.

As of version 4.x, this project uses ESLint 9 with the flat config format.

## Usage

- Run `pnpm add -D @stutzlab/eslint-config`

- Create file `eslint.config.js` in your module folder with contents:

```js
// eslint-disable-next-line import/no-commonjs
const baseConfig = require('@stutzlab/eslint-config');

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
  },
];
```

- Add these dev dependencies to package.json of your project (they are needed because of some specific requirements of the lib, so it can't be just inherited from the import for this lib):

```json
{
  "@typescript-eslint/eslint-plugin": "^8.0.0",
  "@typescript-eslint/parser": "^8.0.0",
  "eslint": "^9.0.0",
  "eslint-import-resolver-typescript": "^3.6.1",
  "eslint-plugin-deprecation": "^3.0.0",
  "eslint-plugin-import": "^2.29.1",
  "eslint-plugin-jest": "^28.6.0",
  "eslint-plugin-prettier": "^5.1.3",
  "eslint-plugin-promise": "^6.4.0",
  "eslint-plugin-functional": "^7.0.0",
  "eslint-plugin-unicorn": "^56.0.0",
  "prettier": "^3.3.2"
}
```

- These rules will already embed basic prettier configurations and you won't need to add anything to your project for prettier, as it will run through the eslint plugin.

### If using VSCode

- Add to `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint"
  ]
}
```

This will recommend to developers the installation of the ESLint plugin, which will show errors and fix them in VSCode.

- Add to `.vscode/settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

This will fix errors when you save in the VSCode editor.
