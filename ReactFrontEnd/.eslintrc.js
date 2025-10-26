module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // fixes 'module is not defined'
    jest: true, // fixes linting for test files
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // fixes React version warning
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // fixes “React must be in scope”
  },
};
