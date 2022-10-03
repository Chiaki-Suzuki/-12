module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'arrow-parens': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'indent': 'off',
    'key-spacing': 'off',
    'linebreak-style': 'off',
    'multi-word-component-names': 'off',
    'max-len': 'off',
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': 'off',
    'no-irregular-whitespace': 'off',
    'no-trailing-spaces': 'off',
    'no-tabs': 'off',
    'no-var': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-empty': 'off',
    'object-curly-spacing': 'off',
    'one-var': 'off',
    'prefer-const': 'off',
    'padded-blocks': 'off',
    'quotes': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'space-before-blocks': 'off',
    'spaced-comment': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-deprecated-v-on-native-modifier': 'off',
    'vue/no-deprecated-filter': 'off',
    // 'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    // 'vue/no-parsing-error': [2, { 'x-invalid-namespace ': false }],
    'vue/no-parsing-error': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/require-v-for-key': 'off',
    'vue/require-component-is': 'off',
    'vue/return-in-computed-property': 'off',
  },
};
