module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': false,
    'react-native/jsx-max-props-per-line': [
      true,
      { maximum: 2, when: 'multiline' },
    ],
  },
};
