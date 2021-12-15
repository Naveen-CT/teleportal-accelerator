module.exports = {
  root: true,
  extends: ["@react-native-community", "airbnb-typescript", "prettier", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  }
};