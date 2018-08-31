module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    allowImportExportEverywhere: false
  },

  plugins: ['prettier', 'unicorn', 'promise'],

  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended'
  ],

  // globals: {
  //     __CLIENT__: true,
  //     __SERVER__: true,
  // },

  // settings: {
  //     "import/resolver": {
  //         webpack: {
  //             config: {
  //                 resolve: {
  //                     alias: resolvers.alias,
  //                 },
  //             },
  //         },
  //     },
  // },

  rules: {
    'react/jsx-filename-extension': 'off',
    'unicorn/filename-case': 'off',
    'import/no-extraneous-dependencies': 'off',

    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: 'Ignored$',
        ignoreRestSiblings: true
      }
    ],

    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ]
  }
};
