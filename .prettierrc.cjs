module.exports = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'none',
  endOfLine: 'lf',
  singleAttributePerLine: false,
  bracketSameLine: true,
  bracketSpacing: true,
  arrowParens: 'always',
  tailwindConfig: './tailwind.config.js',
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindFunctions: ['clsx']
}
