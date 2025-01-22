// eslint-disable-next-line import/no-commonjs
module.exports = {
  root: true,
  ignorePatterns: ['dist/**', 'build/**', 'coverage/**', 'node_modules/**', '.turbo/**'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint', 
    'jest', 
    'promise',
    'deprecation',
    'unicorn',
    'functional',
  ],
  parserOptions: {
    sourceType: 'module'
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

    //don't forget to wait for promise functions
    '@typescript-eslint/no-floating-promises': 'error',

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

    // group imports and exports
    'import/order': ['error', {'newlines-between':'always'}],
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

    // CODE STYLE AND CONSISTENCY (plugin unicorn)
    'unicorn/no-for-loop': 'error',
    'unicorn/no-keyword-prefix': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-negation-in-equality-check': 'error',
    'unicorn/no-magic-array-flat-depth': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-length-as-slice-end': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-invalid-fetch-options': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-empty-file': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-unnecessary-polyfills': 'error',
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/no-typeof-undefined': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-thenable': 'error',
    'unicorn/no-null': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-single-promise-in-promise-methods': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-empty-array-spread': 'error',
    'unicorn/consistent-existence-index-check': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': [
      'error',
      {
        cases: { camelCase: true, pascalCase: true, kebabCase: true },
        ignore: ['WSO2', 'API', 'AWS', 'CDK', 'OAUTH', 'JWT', 'URL', 'URI'],
      },
    ],
    'unicorn/import-style': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-anonymous-default-export': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/text-encoding-identifier-case': 'error',
    'unicorn/template-indent': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/relative-url-style': ['error', 'always'],
    'unicorn/prefer-structured-clone': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-native-coercion-functions': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-math-min-max': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-json-parse-buffer': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-event-target': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-blob-reading-methods': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-set-size': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-string-slice': 'error',

    'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],

    // Not valuable rules
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-global-this': 'off',
    'unicorn/prefer-default-parameters': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-negated-condition': 'off',
    'unicorn/consistent-function-scoping': 'off',

    // FUNCTIONAL PROGRAMMING STYLE
    'functional/prefer-property-signatures': 'error',
    'functional/no-let': 'error',
    'functional/immutable-data': ['error', { ignoreImmediateMutation: true }],
    'functional/no-try-statements': 'error',
    '@typescript-eslint/prefer-readonly': 'error',

  }
};
