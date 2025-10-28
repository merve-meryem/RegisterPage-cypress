module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '*/tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'jest', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    "plugin:cypress/recommended"
  ],
  rules: {
    'no-unused-vars': 2,
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};