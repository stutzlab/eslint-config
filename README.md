# eslint-config

ESLint rules in 'Golang style' used by most of our projects.

## Usage

- Run `yarn add -D @stutzlab/eslint-config`

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
  "eslint": "^8.33.0",
  "eslint-plugin-import": "^2.25.2"
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
