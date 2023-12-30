# eslint-config

ESLint rules in 'Golang style' used by most of our projects.

Use version 2.4.0 for Yarn based projects.

From version 3.x on all dependencies are peerDependencies, which is easier to be used with PNPM as it install them automatically.

## Usage

- Run `pnpm add -D @stutzlab/eslint-config`

- Create file .eslintrc.js in your module folder with contents

```js
module.exports = {
  parserOptions: {
    // needed by some typescript rules
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  extends: '@stutzlab/eslint-config',
};
```

- Add these dev dependencies to package.json of your project (they are needed because of some specific requirements of the lib, so it can't be just inherited from the import for this lib)

```json
{
  "@typescript-eslint/eslint-plugin": "^5.53.0",
  "@typescript-eslint/parser": "^5.53.0",
  "eslint": ">= 8",
  "eslint-config-airbnb-base": "^15.0.0",
  "eslint-config-airbnb-typescript": "^17.0.0",
  "eslint-config-prettier": "^8.6.0",
  "eslint-import-resolver-typescript": "^3.5.3",
  "eslint-plugin-fp": "^2.3.0",
  "eslint-plugin-import": "^2.27.5",
  "eslint-plugin-jest": "^27.2.1",
  "eslint-plugin-prettier": "^4.2.1",
  "eslint-plugin-promise": "^6.1.1",
  "prettier": "^2.8.4"
}
```

- These rules will already embed basic prettier configurations and you won't need to add anything to your project for prettier, as it will run through eslint plugin.

### If using VSCode

- Add to .vscode/extensions.json

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint"
  ]
}
```

This will recommend to developers the installation of eslint plugin which will show errors and fix them in VSCode.

- Add to .vscode/settings.json:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript"
  ]
}
```

This will fix errors when you save in VSCode editor.
