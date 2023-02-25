// eslint-disable-next-line import/no-commonjs
module.exports = {
  root: true,
  ignorePatterns: ['dist/**', 'build/**', 'coverage/**', 'node_modules/**', '.turbo/**'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint', 
    'jest', 
    'promise'
  ],
  parserOptions: {
    sourceType: "module",
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',

    'plugin:@typescript-eslint/recommended',
    // this is too slow for now, so we rely on calling tsc via lint Makefile targets
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',

    'plugin:promise/recommended',
    'plugin:jest/recommended',

    'plugin:prettier/recommended'
  ],
  settings: {
    // necessary to make import rules to find files
    'import/resolver': {
      node: true,
      typescript: true
    },
  },
  rules: {


    // CODE SMELLS
    // The developer must really understand what is going on and ignore
    // linting for the line if necessary
    'import/no-unassigned-import': 'error',
    'no-invalid-this': 'error',

    // if more than 30 imports, probably the file is too large/complicated
    'import/max-dependencies': [
      'error',
      {
        max: 30,
        ignoreTypeImports: true,
      },
    ],

    // Probably it would be better to slice the logic into internal functions to make
    // it more readable and understandable
    complexity: ['error', { max: 16 }],
    'no-else-return': 'error',
    'max-depth': ['error', 5],
    'max-len': [
      'error',
      {
        code: 120,
        comments: 100,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],

    // Nested callbacks makes it harder to understand the code
    'max-nested-callbacks': ['error', { max: 7 }],

    // If something is marked as "fixme" it should be fixed before pushing to ci/cd
    // If it's something that can be done later (technical deby), use "todo"
    'no-warning-comments': ['error', { terms: ['fixme'] }],

    // Normally we should use a logging utility for this
    'no-console': "error",

    // Process env variables are global and should be used only on entry points of a program
    'no-process-env': "error",


    
    // Rarelly we would have these situations, so it needs explicit analysis
    'no-undefined': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    'no-unused-expressions': 'error',



    // ENFORCE NEWER LANGUAGE STRUCTURES
    // newer async/await promise syntax
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',

    // don't enforce destructuring for arrays
    'prefer-destructuring': ['error', { object: true, array: false }],

    // don't allow 'require' keyword
    'import/no-commonjs': 'error',

    // don't use 'require' for imports
    '@typescript-eslint/no-require-imports': 'error',



    // READABILITY
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 100,
        trailingComma: 'all',
        singleQuote: true,
        bracketSpacing: true,
      },
    ],
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",

    // group imports and exports
    'import/order': ['error', {'newlines-between':'always'}],
    'import/group-exports': 'error',
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: true,
      },
    ],

    // add spaces between curls and contents
    'object-curly-spacing': ['error', 'always'],



    // TYPESCRIPT practices
    '@typescript-eslint/explicit-function-return-type': 'error',

    // Sometimes it's best to organize the logic top down, so the entrypoint
    // will have references to functions below in the file
    '@typescript-eslint/no-use-before-define': 'off',

    // Be more explicit when using async functions
    '@typescript-eslint/promise-function-async': 'error',
  }
};
