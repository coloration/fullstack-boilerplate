import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    ignores: ['**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
)
