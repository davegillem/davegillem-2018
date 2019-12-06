const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const tsConfig = isDev ? 'tsconfig.test.json' : 'tsconfig.prod.json';
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 6,
		project: path.resolve(__dirname, `./${tsConfig}`),
		tsconfigRootDir: __dirname,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true, // enable JSX
		},
	},
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		//'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		'prettier',
		'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'prettier/react', // disables react-specific linting rules that conflict with prettier
		'eslint-config-prettier',
	],
	env: {
		browser: true,
		jest: true,
		node: true,
	},
	globals: {},
	settings: {
		react: {
			createClass: 'createReactClass', // Regex for Component Factory to use, default to 'createReactClass'
			pragma: 'React', // Pragma to use, default to 'React'
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
		propWrapperFunctions: [
			// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
			'forbidExtraProps',
			{
				property: 'freeze',
				object: 'Object',
			},
			{
				property: 'myFavoriteWrapper',
			},
		],
		linkComponents: [
			// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
			'Hyperlink',
			{
				name: 'Link',
				linkAttribute: 'to',
			},
		],
	},
	rules: {
		// **************** Eslint Specific Rules v6.3.0 **************** //
		// * COMMENTED RULES INDICATE ITS HANDLED BY AN EXTENDS DEFINITION ABOVE
		// 'accessor-pairs': 'off',
		'array-bracket-spacing': [
			'error',
			'never',
			{
				arraysInArrays: false,
				objectsInArrays: false,
			},
		],
		'arrow-body-style': ['error', 'always'],
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
		'block-scoped-var': 'error',
		'brace-style': [
			'warn',
			'1tbs',
			{
				allowSingleLine: true,
			},
		],
		'callback-return': 'off',
		// 'camelcase': ['error', {
		// 	'ignoreDestructuring': true
		// }],
		// 'comma-dangle': [
		// 	'error',
		// 	'always-multiline',
		// 	{
		// 		arrays: 'always-multiline',
		// 		objects: 'always-multiline',
		// 		imports: 'always-multiline',
		// 		exports: 'always-multiline',
		// 		functions: 'never',
		// 	},
		// ],
		'comma-spacing': [
			'warn',
			{
				after: true,
				before: false,
			},
		],
		'comma-style': ['error', 'last'],
		complexity: 'off',
		'consistent-return': 'off',
		'consistent-this': 'off',
		// 'constructor-super': 'error',
		curly: ['error', 'all'],
		'default-case': 'warn',
		'dot-notation': 'warn',
		'eol-last': 'off',
		eqeqeq: 'error',
		// 'for-direction': 'error',
		'func-call-spacing': ['error', 'never'],
		'func-names': 'off',
		'func-style': 'off',
		'generator-star-spacing': 'off',
		// 'getter-return': 'error',
		'grouped-accessor-pairs': 'warn',
		'guard-for-in': 'error',
		'handle-callback-err': 'off',
		'id-length': 'off',
		'id-match': 'off',
		// 'indent': ['error', 'tab'],
		'init-declarations': 'off',
		'key-spacing': [
			'error',
			{
				afterColon: true,
				//'align': 'colon',
				beforeColon: false,
				// 'mode': 'strict',
			},
		],
		'keyword-spacing': [
			'error',
			{
				after: true,
				before: true,
				overrides: {},
			},
		],
		'linebreak-style': 'off',
		'lines-around-comment': 'off',
		'max-depth': 'off',
		'max-len': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'new-cap': 'warn',
		'new-parens': 'error',
		'newline-after-var': 'off',
		'no-alert': 'error',
		// 'no-array-constructor': 'off',  // @typescript-eslint/recommended
		// 'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': 'off',
		'no-caller': 'off',
		// 'no-case-declarations': 'error',
		'no-class-assign': 'error',
		// 'no-compare-neg-zero': 'error',
		'no-cond-assign': ['error', 'always'],
		// "no-confusing-arrow": ["error", {
		// 	"allowParens": false
		// }],
		'no-console': 'off',
		// 'no-const-assign': 'error',
		// 'no-constant-condition': 'error',
		'no-constructor-return': 'warn',
		'no-continue': 'off',
		// 'no-control-regex': 'error',
		// 'no-debugger': 'error',
		// 'no-delete-var': 'error',
		'no-div-regex': 'off',
		// 'no-dupe-args': 'error'
		// 'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		// 'no-dupe-keys': 'error',
		// 'no-duplicate-case': 'error',
		'no-else-return': [
			'error',
			{
				allowElseIf: true,
			},
		],
		// 'no-empty': 'error',
		// 'no-empty-character-class': 'error',
		'no-empty-pattern': 'off', // often used to specify parameters in an interface declaration of a function
		'no-eq-null': 'error',
		'no-eval': 'error',
		// 'no-ex-assign': 'error',
		'no-extend-native': 'off',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'off',
		'no-extra-parens': 'off',
		// 'no-extra-semi': 'error',
		// 'no-fallthrough': 'error',
		'no-floating-decimal': 'off',
		// 'no-func-assign': 'error',
		// 'no-global-assign': 'error',
		'no-implicit-coercion': [
			'error',
			{
				boolean: false,
			},
		],
		'no-implied-eval': 'error',
		'no-inline-comments': 'off',
		// 'no-inner-declarations': 'error',
		// 'no-invalid-regexp': 'error',
		'no-irregular-whitespace': [
			'error',
			{
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true,
			},
		],
		'no-iterator': 'error',
		'no-label-var': 'off',
		'no-labels': 'off',
		'no-lone-blocks': 'off',
		'no-lonely-if': 'off',
		'no-loop-func': 'error',
		// 'no-misleading-character-class': 'error',
		'no-mixed-operators': 'warn',
		'no-mixed-requires': 'off',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 'warn',
		'no-nested-ternary': 'off',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'off',
		'no-new-require': 'off',
		// 'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		// 'no-obj-calls': 'error',
		// 'no-octal': 'error',
		'no-octal-escape': 'off',
		'no-param-reassign': 'error',
		'no-path-concat': 'off',
		'no-plusplus': 'off',
		'no-process-env': 'off',
		'no-process-exit': 'off',
		'no-proto': 'error',
		// 'no-prototype-builtins': 'error',
		// 'no-redeclare': 'error',
		// 'no-regex-spaces': 'error',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-modules': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': 'off',
		'no-script-url': 'off',
		// 'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'warn',
		'no-setter-return': 'error',
		'no-shadow': [
			'off',
			{
				// causing errors with imported files
				builtinGlobals: true,
				hoist: 'functions',
			},
		],
		// 'no-shadow-restricted-names': 'error',
		// 'no-sparse-arrays': 'error',
		'no-sync': 'off',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		// 'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': [
			'warn',
			{
				ignoreComments: true,
				skipBlankLines: true,
			},
		],
		// 'no-undef': 'error',
		'no-undef-init': 'warn',
		'no-undefined': 'off', // we should use this rule but requires a lot of refactoring
		'no-underscore-dangle': 'warn',
		// 'no-unexpected-multiline': 'error',
		'no-unneeded-ternary': 'warn',
		// 'no-unreachable': 'error',
		// 'no-unsafe-finally': 'error',
		// 'no-unsafe-negation': 'error',
		'no-unused-expressions': 'error',
		// 'no-unused-labels': 'error',
		// 'no-unused-vars': ['error', {
		// 	'args': 'none',
		// 	'caughtErrors': 'none',
		// 	'ignoreRestSiblings': true
		// }],
		// 'no-unreachable': 'error',
		// 'no-unsafe-finally': 'error',
		// 'no-unsafe-negation': 'error',
		// 'no-unused-labels': 'error',
		'no-useless-call': 'error',
		// 'no-useless-catch': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'off',
		'no-useless-return': 'error',
		// 'no-use-before-define': ['error', {
		// 	'functions': false
		// }],
		// 'no-var': 'error',  // @typescript-eslint/recommended
		'no-void': 'warn',
		'no-warning-comments': 'off',
		'no-whitespace-before-property': 'warn',
		// 'no-with': 'error',
		// 'object-curly-newline': [
		// 	'warn',
		// 	{
		// 		ObjectExpression: {
		// 			multiline: true,
		// 			minProperties: 4,
		// 		},
		// 		ObjectPattern: {
		// 			multiline: true,
		// 			minProperties: 4,
		// 		},
		// 		ImportDeclaration: {
		// 			multiline: true,
		// 			minProperties: 4,
		// 		},
		// 		ExportDeclaration: {
		// 			multiline: true,
		// 			minProperties: 4,
		// 		},
		// 	},
		// ],
		//'object-curly-spacing': ['warn', 'always', {}],
		'object-property-newline': 'off',
		'object-shorthand': 'off',
		'one-var': 'off',
		'one-var-declaration-per-line': 'off',
		'operator-assignment': ['warn', 'always'],
		// 'operator-linebreak': [
		// 	'warn',
		// 	'none',
		// 	{
		// 		overrides: {
		// 			'=': 'ignore',
		// 			'+=': 'ignore',
		// 			'?': 'ignore',
		// 			':': 'ignore',
		// 		},
		// 	},
		// ],
		'padded-blocks': [
			'warn',
			'never',
			{
				allowSingleLineBlocks: true,
			},
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
		],
		// 'prefer-const': 'off',  // @typescript-eslint/recommended
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-object-spread': 'off', // not ready until ES2018
		'prefer-promise-reject-errors': 'off',
		// 'prefer-spread': 'off', // @typescript-eslint/recommended
		'quote-props': [
			'error',
			'consistent-as-needed',
			{
				keywords: true,
				numbers: true,
				unnecessary: false,
			},
		],
		quotes: [
			'warn',
			'single',
			{
				allowTemplateLiterals: true,
				avoidEscape: true,
			},
		],
		radix: 'off',
		// 'require-atomic-updates': 'error',
		'require-await': 'off', // @typescript-eslint/recommended-requiring-type-checking
		'require-unicode-regexp': 'off',
		// 'require-yield': 'error',
		semi: ['error', 'always'],
		'semi-spacing': [
			'error',
			{
				after: true,
				before: false,
			},
		],
		'semi-style': ['error', 'last'],
		'sort-keys': [
			'off',
			'asc',
			{
				caseSensitive: false,
				natural: false,
				minKeys: 2,
			},
		],
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
			},
		],
		'sort-vars': [
			'error',
			{
				ignoreCase: true,
			},
		],
		'space-before-blocks': ['off', 'never'],
		'space-before-function-paren': ['warn', 'never'],
		'space-in-parens': ['warn', 'never', {}],
		'space-infix-ops': 'off',
		'space-unary-ops': [
			'warn',
			{
				words: true,
				nonwords: false,
				overrides: {},
			},
		],
		'spaced-comment': [
			'warn',
			'always',
			{
				line: {
					markers: ['/'],
					exceptions: ['-', '+'],
				},
				block: {
					markers: ['!'],
					exceptions: ['*'],
					balanced: true,
				},
			},
		],
		'switch-colon-spacing': [
			'warn',
			{
				after: true,
				before: false,
			},
		],
		'template-tag-spacing': ['warn', 'always'],
		'unicode-bom': ['error', 'never'],
		// 'use-isnan': 'error',
		// 'valid-typeof': 'error',
		'vars-on-top': 'error',
		'wrap-iife': ['error', 'any'],
		'wrap-regex': 'error',
		yoda: 'off',

		// **************** TYPESCRIPT RULES **************** //
		// '@typescript-eslint/adjacent-overload-signatures': 'error', // @typescript-eslint/recommended
		'@typescript-eslint/array-type': 'error',
		// '@typescript-eslint/await-thenable': 'error', // @typescript-eslint/recommended-requiring-type-checking
		'@typescript-eslint/ban-ts-ignore': 'off',
		// '@typescript-eslint/ban-types': 'error', // @typescript-eslint/recommended
		camelcase: 'off', // @typescript-eslint/recommended
		'@typescript-eslint/camelcase': [
			'off',
			{
				ignoreDestructuring: true,
				properties: 'always',
			},
		], // @typescript-eslint/recommended
		// '@typescript-eslint/class-name-casing': 'error', // @typescript-eslint/recommended
		// '@typescript-eslint/consistent-type-assertions': 'error', // @typescript-eslint/recommended
		'@typescript-eslint/consistent-type-definitions': 'error',
		// '@typescript-eslint/explicit-function-return-type': 'warn', // @typescript-eslint/recommended
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': 'error',
		'@typescript-eslint/generic-type-naming': 'error',
		indent: 'off',
		//'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/interface-name-prefix': [
			'error',
			{
				prefixWithI: 'always',
			},
		], // @typescript-eslint/recommended
		// '@typescript-eslint/member-delimiter-style': 'error', // @typescript-eslint/recommended
		'@typescript-eslint/member-naming': 'error',
		'@typescript-eslint/member-ordering': 'error',
		// 'no-array-constructor': 'off', // @typescript-eslint/recommended
		// '@typescript-eslint/no-array-constructor': 'error', // @typescript-eslint/recommended
		// 'no-empty-function': 'off', // @typescript-eslint/recommended
		// '@typescript-eslint/no-empty-function': 'error', // @typescript-eslint/recommended
		// '@typescript-eslint/no-empty-interface': 'error', // @typescript-eslint/recommended
		'@typescript-eslint/no-explicit-any': 'error',
		'no-extra-parens': 'off',
		// '@typescript-eslint/no-extra-parens': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': 'off',
		// '@typescript-eslint/no-for-in-array': 'error', // @typescript-eslint/recommended-requiring-type-checking
		'@typescript-eslint/no-inferrable-types': 'off', // @typescript-eslint/recommended
		'no-magic-numbers': 'off',
		'@typescript-eslint/no-magic-numbers': [
			'error',
			{
				ignore: [0, 1, -1], // for loops and such
				ignoreArrayIndexes: true,
				ignoreEnums: true,
				ignoreNumericLiteralTypes: true,
			},
		],
		// '@typescript-eslint/no-misused-new': 'error', // @typescript-eslint/recommended
		// '@typescript-eslint/no-misused-promises': 'error', // @typescript-eslint/recommended-requiring-type-checking
		// '@typescript-eslint/no-namespace': 'error', // @typescript-eslint/recommended
		// '@typescript-eslint/no-non-null-assertion': 'error', // @typescript-eslint/recommended
		'@typescript-eslint/no-parameter-properties': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		// '@typescript-eslint/no-this-alias': 'error', // @typescript-eslint/recommended
		'@typescript-eslint/no-type-alias': 'off',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'off',
		// '@typescript-eslint/no-unnecessary-type-assertion': 'error', // @typescript-eslint/recommended
		'no-unused-vars': 'off', // @typescript-eslint/recommended
		'@typescript-eslint/no-unused-vars': 'off', // @typescript-eslint/recommended
		'no-use-before-define': 'off', // @typescript-eslint/recommended
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				functions: false,
			},
		], // @typescript-eslint/recommended
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'off',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-for-of': 'off',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		// '@typescript-eslint/prefer-namespace-keyword': 'error', // @typescript-eslint/recommended
		'@typescript-eslint/prefer-readonly': 'off',
		'@typescript-eslint/prefer-regexp-exec': 'error',
		// '@typescript-eslint/prefer-string-starts-ends-with': 'error', // @typescript-eslint/recommended-requiring-type-checking
		'@typescript-eslint/promise-function-async': 'off',
		// 'quotes': 'off',
		// '@typescript-eslint/quotes': 'error',
		'@typescript-eslint/require-array-sort-compare': 'error',
		'require-await': 'off', // @typescript-eslint/recommended-requiring-type-checking
		'@typescript-eslint/require-await': 'off', // @typescript-eslint/recommended-requiring-type-checking // turned off because after merged PR, still gettting errors PR SOURCE: https://github.com/typescript-eslint/typescript-eslint/issues/987
		'@typescript-eslint/restrict-plus-operands': 'error',
		semi: 'off',
		'@typescript-eslint/semi': 'error',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		// '@typescript-eslint/triple-slash-reference': 'error', // @typescript-eslint/recommended
		// '@typescript-eslint/type-annotation-spacing': 'error', // @typescript-eslint/recommended
		'@typescript-eslint/typedef': 'error',
		// '@typescript-eslint/unbound-method': 'error', // @typescript-eslint/recommended-requiring-type-checking
		'@typescript-eslint/unified-signatures': 'error',
		// 'no-var': 'error', // @typescript-eslint/recommended
		// 'prefer-const': 'error', // @typescript-eslint/recommended
		// 'prefer-rest-params': 'error', // @typescript-eslint/recommended
		// 'prefer-spread': 'error', // @typescript-eslint/recommended

		// **************** REACT RULES **************** //
		// 'react/boolean-prop-naming': 'off', // Enforces consistent naming for boolean props
		// 'react/button-has-type': 'off', // Forbid 'button' element without an explicit 'type' attribute
		// 'react/default-props-match-prop-types': 'off', // Prevent extraneous defaultProps on components
		// 'react/destructuring-assignment': 'off', // Rule enforces consistent usage of destructuring assignment in component
		'react/display-name': 'off', // [react/recommended] Prevent missing displayName in a React component definition -- WE SHPOULD BE DOING THIS
		// 'react/forbid-component-props': 'off', // Forbid certain props on Components
		// 'react/forbid-dom-props': 'off', // Forbid certain props on DOM Nodes
		// 'react/forbid-elements': 'off', // Forbid certain elements
		// 'react/forbid-prop-types': 'off', // Forbid certain propTypes
		// 'react/forbid-foreign-prop-types': 'off', // Forbid foreign propTypes
		// 'react/no-access-state-in-setstate': 'off', // Prevent using this.state inside this.setState
		// 'react/no-array-index-key': 'off', // Prevent using Array index in key props
		// 'react/no-children-prop': 'error', // [react/recommended] Prevent passing children as props
		// 'react/no-danger': 'off', // Prevent usage of dangerous JSX properties
		// 'react/no-danger-with-children': 'error', // [react/recommended] Prevent problem with children and props.dangerouslySetInnerHTML
		'react/no-deprecated': 'off', // [react/recommended] Prevent usage of deprecated methods, including component lifecycle methods
		// 'react/no-did-mount-set-state': 'off', // Prevent usage of setState in componentDidMount
		// 'react/no-did-update-set-state': 'off', // Prevent usage of setState in componentDidUpdate
		'react/no-direct-mutation-state': 'off', // [react/recommended] Prevent direct mutation of this.state
		// 'react/no-find-dom-node': 'error', // [react/recommended] Prevent usage of findDOMNode
		// 'react/no-is-mounted': 'error', // [react/recommended] Prevent usage of isMounted
		// 'react/no-multi-comp': 'off', // Prevent multiple component definition per file
		// 'react/no-redundant-should-component-update': 'off', // Prevent usage of shouldComponentUpdate when extending React.PureComponent
		// 'react/no-render-return-value': 'error', // [react/recommended] Prevent usage of the return value of React.render
		// 'react/no-set-state': 'off', // Prevent usage of setState
		// 'react/no-typos': 'off', // Prevent common casing typos
		'react/no-string-refs': 'off', // [react/recommended] Prevent using string references in ref attribute.
		// 'react/no-this-in-sfc': 'off', // Prevent using this in stateless functional components
		// 'react/no-unescaped-entities': 'error', // [react/recommended] Prevent invalid characters from appearing in markup
		// 'react/no-unknown-property': 'error', // [react/recommended] Prevent usage of unknown DOM property (fixable)
		// 'react/no-unsafe': 'error', // [react/recommended] Prevent usage of unsafe lifecycle methods
		// 'react/no-unused-prop-types': 'off', // Prevent definitions of unused prop types
		// 'react/no-unused-state': 'off', // Prevent definitions of unused state properties
		// 'react/no-will-update-set-state': 'off', // Prevent usage of setState in componentWillUpdate
		// 'react/prefer-es6-class': 'off', // Enforce ES5 or ES6 class for React Components
		// 'react/prefer-read-only-props': 'off', // Enforce that props are read-only
		// 'react/prefer-stateless-function': 'off', // Enforce stateless React Components to be written as a pure function
		'react/prop-types': 'off', // [react/recommended] Prevent missing props validation in a React component definition
		// 'react/react-in-jsx-scope': 'error', // [react/recommended] Prevent missing React when using JSX
		// 'react/require-default-props': 'off', // Enforce a defaultProps definition for every prop that is not a required prop
		// 'react/require-optimization': 'off', // Enforce React components to have a shouldComponentUpdate method
		'react/require-render-return': 'off', // [react/recommended] Enforce ES5 or ES6 class for returning value in render function
		// 'react/self-closing-comp': 'off', // Prevent extra closing tags for components without children (fixable)
		// 'react/sort-comp': 'off', // Enforce component methods order (fixable)
		// 'react/sort-prop-types': 'off', // Enforce propTypes declarations alphabetical sorting
		// 'react/state-in-constructor': 'off', // Enforce the state initialization style to be either in a constructor or with a class property
		// 'react/static-property-placement': 'off', // Enforces where React component static properties should be positioned.
		// 'react/style-prop-object': 'off', // Enforce style prop value being an object
		// 'react/void-dom-elements-no-children': 'off', // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
		// // JSX-specific rules
		// 'react/jsx-boolean-value': 'off', // Enforce boolean attributes notation in JSX (fixable)
		// 'react/jsx-child-element-spacing': 'off', // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
		// 'react/jsx-closing-bracket-location': 'off', // Validate closing bracket location in JSX (fixable)
		// 'react/jsx-closing-tag-location': 'off', // Validate closing tag location in JSX (fixable)
		// 'react/jsx-curly-newline': 'off', // Enforce or disallow newlines inside of curly braces in JSX attributes and expressions (fixable)
		// 'react/jsx-curly-spacing': 'off', // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
		// 'react/jsx-equals-spacing': 'off', // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
		'react/jsx-filename-extension': [
			// [react/recommended] Restrict file extensions that may contain JSX,  we want to check '.tsx' files
			'warn',
			{
				extensions: ['.jsx', '.tsx'],
			},
		],
		// 'react/jsx-first-prop-new-line': 'off', // Enforce position of the first prop in JSX (fixable)
		// 'react/jsx-handler-names': 'off', // Enforce event handler naming conventions in JSX
		// 'react/jsx-indent': 'off', // Validate JSX indentation (fixable)
		// 'react/jsx-indent-props': 'off', // Validate props indentation in JSX (fixable)
		// 'react/jsx-key': 'error', // [react/recommended] Validate JSX has key prop when in array or iterator
		// 'react/jsx-max-depth': 'off', // Validate JSX maximum depth
		// 'react/jsx-max-props-per-line': 'off', // Limit maximum of props on a single line in JSX (fixable)
		// 'react/jsx-no-bind': 'off', // Prevent usage of .bind() and arrow functions in JSX props
		// 'react/jsx-no-comment-textnodes': 'error', // [react/recommended] Prevent comments from being inserted as text nodes
		// 'react/jsx-no-duplicate-props': 'error', // [react/recommended] Prevent duplicate props in JSX
		// 'react/jsx-no-literals': 'off', // Prevent usage of unwrapped JSX strings
		// 'react/jsx-no-target-blank': 'error', // [react/recommended] Prevent usage of unsafe target='_blank'
		// 'react/jsx-no-undef': 'error', // [react/recommended] Disallow undeclared variables in JSX
		// 'react/jsx-one-expression-per-line': 'off', // Limit to one expression per line in JSX
		// 'react/jsx-curly-brace-presence': 'off', // Enforce curly braces or disallow unnecessary curly braces in JSX
		// 'react/jsx-fragments': 'off', // Enforce shorthand or standard form for React fragments
		// 'react/jsx-pascal-case': 'off', // Enforce PascalCase for user-defined JSX components
		// 'react/jsx-props-no-multi-spaces': 'off', // Disallow multiple spaces between inline JSX props (fixable)
		// 'react/jsx-props-no-spreading': 'off', // Disallow JSX props spreading
		// 'react/jsx-sort-default-props': 'off', // Enforce default props alphabetical sorting
		// 'react/jsx-sort-props': 'off', // Enforce props alphabetical sorting (fixable)
		// 'react/jsx-space-before-closing': 'off', // Validate spacing before closing bracket in JSX (fixable)
		// 'react/jsx-tag-spacing': 'off', // Validate whitespace in and around the JSX opening and closing brackets (fixable)
		// 'react/jsx-uses-react': 'error', // [react/recommended] Prevent React to be incorrectly marked as unused
		// 'react/jsx-uses-vars': 'error', // [react/recommended] Prevent variables used in JSX to be incorrectly marked as unused
		// 'react/jsx-wrap-multilines': 'off', // Prevent missing parentheses around multilines JSX (fixable)
		// **************** REACT HOOKS RULES **************** //
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		// **************** PRETTIER **************** //
		'prettier/prettier': 'error',
	},
};
