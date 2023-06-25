/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
const { rules } = require('@typescript-eslint/eslint-plugin')

const permissiveTypescriptRules = Object.keys(rules).reduce((table, rule) => {
	table[`@typescript-eslint/${rule}`] = 'off'
	return table
}, {})

/** @type {import('eslint').Linter.Config} */
module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'jest', 'prettier'],
	extends: [
		'plugin:prettier/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parserOptions: {
		warnOnUnsupportedTypeScriptVersion: false,
		sourceType: 'module',
		ecmaVersion: 'latest',
	},
	env: {
		node: true,
		jest: true,
	},
	rules: {
		'no-console': ['warn'],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/consistent-type-imports': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
	},
	settings: {
		jest: {
			version: 28,
		},
	},
	overrides: [
		{
			files: ['*.test.*', '*.spec.*'],
			rules: {
				...permissiveTypescriptRules,
			},
		},
	],
}
