import defineConfig from '@antfu/eslint-config';

export default defineConfig({
  ignores: ['tsconfig*.json', 'package.json'],
  typescript: true,
  vue: {
    overrides: {
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: 5,
        multiline: 1,
      }],
      'import/first': 'off',
    },
  },
  stylistic: {
    semi: true,
    quotes: 'single',
    indent: 2,
    overrides: {
      'style/max-len': ['error', {
        code: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      }],
    },
  },
  formatters: {
    css: true,
    prettierOptions: {
      printWidth: 100,
    },
  },
});
