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

- If you are using prettier, this set of rules seems to work well along:

.prettierrc.js
```js
module.exports = {
  tabWidth: 2,
  printWidth: 100,
  trailingComma: 'all',
  singleQuote: true,
  bracketSpacing: true,
};
```
