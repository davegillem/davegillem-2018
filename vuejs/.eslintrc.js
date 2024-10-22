module.exports = {
	root: true,
	env: {
		"browser": true,
		"es6": true,
		node: true
	},
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module"
	},
	extends: ["plugin:vue/essential"], // "@vue/prettier"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"accessor-pairs": 0,
		"array-bracket-spacing": [
			2,
			"never",
			{}
		],
		"arrow-parens": 0,
		"arrow-spacing": 0,
		"block-scoped-var": 2,
		"brace-style": [
			1,
			"1tbs",
			{
				"allowSingleLine": true
			}
		],
		"callback-return": 0,
		"camelcase": 0,
		"comma-dangle": [
			2,
			{
				"arrays": "never",
				"exports": "always-multiline",
				"functions": "never",
				"imports": "always-multiline",
				"objects": "never"
			}
		],
		"comma-spacing": [
			1,
			{
				"after": true
			}
		],
		"comma-style": 1,
		"complexity": 0,
		"consistent-return": 0,
		"consistent-this": 0,
		"constructor-super": 0,
		"curly": [
			2,
			"all"
		],
		"default-case": 0,
		"dot-notation": 1,
		"eol-last": 0,
		"eqeqeq": 2,
		"func-names": 0,
		"func-style": 0,
		"generator-star-spacing": 0,
		"guard-for-in": 2,
		"handle-callback-err": 0,
		"id-length": 0,
		"id-match": 0,
		// "import/no-extraneous-dependencies": [
		// 	2,
		// 	{
		// 		"devDependencies": true
		// 	}
		// ],
		"indent": 0,
		"init-declarations": 0,
		"key-spacing": 0,
		"keyword-spacing": 1,
		"linebreak-style": 0,
		"lines-around-comment": 0,
		"max-depth": 0,
		"max-len": [
			2,
			1130,
			4
		],
		"max-nested-callbacks": 0,
		"max-params": 0,
		"max-statements": 0,
		"new-cap": 0,
		"new-parens": 2,
		"newline-after-var": 0,
		"no-alert": 2,
		"no-array-constructor": 0,
		"no-bitwise": 0,
		"no-caller": 0,
		"no-catch-shadow": 1,
		"no-class-assign": 0,
		"no-cond-assign": [
			2,
			"always"
		],
		"no-console": 0,
		"no-const-assign": 2,
		"no-constant-condition": 2,
		"no-continue": 0,
		"no-control-regex": 2,
		"no-debugger": 2,
		"no-delete-var": 2,
		"no-div-regex": 0,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-else-return": 0,
		"no-empty": 2,
		"no-empty-character-class": 2,
		"no-empty-label": 0,
		"no-eq-null": 0,
		"no-eval": 2,
		"no-ex-assign": 2,
		"no-extend-native": 0,
		"no-extra-bind": 2,
		"no-extra-boolean-cast": 0,
		"no-extra-parens": 0,
		"no-extra-semi": 2,
		"no-fallthrough": 2,
		"no-floating-decimal": 0,
		"no-func-assign": 0,
		"no-implicit-coercion": 0,
		"no-implied-eval": 2,
		"no-inline-comments": 0,
		"no-inner-declarations": 0,
		"no-invalid-regexp": 2,
		"no-irregular-whitespace": 0,
		"no-iterator": 0,
		"no-label-var": 0,
		"no-labels": 0,
		"no-lone-blocks": 2,
		"no-lonely-if": 0,
		"no-loop-func": 2,
		"no-mixed-requires": 0,
		"no-mixed-spaces-and-tabs": 0,
		"no-multi-spaces": 0,
		"no-multi-str": 0,
		"no-multiple-empty-lines": 1,
		"no-native-reassign": 2,
		"no-negated-in-lhs": 0,
		"no-nested-ternary": 0,
		//"no-new": 2,
		"no-new-func": 2,
		"no-new-object": 0,
		"no-new-require": 0,
		"no-new-wrappers": 2,
		"no-obj-calls": 2,
		"no-octal": 2,
		"no-octal-escape": 0,
		"no-param-reassign": [
			2,
			{
				"props": false
			}
		],
		"no-path-concat": 0,
		"no-plusplus": 0,
		"no-process-exit": 0,
		"no-proto": 2,
		"no-redeclare": 2,
		"no-regex-spaces": 2,
		"no-restricted-modules": 0,
		"no-return-assign": 0,
		"no-script-url": 0,
		"no-self-compare": 2,
		"no-sequences": 0,
		"no-shadow": [
			2,
			{
				"builtinGlobals": false,
				"hoist": "functions"
			}
		],
		"no-shadow-restricted-names": 2,
		"no-spaced-func": 1,
		"no-sparse-arrays": 2,
		"no-sync": 0,
		"no-ternary": 0,
		"no-this-before-super": 0,
		"no-throw-literal": 2,
		"no-trailing-spaces": [
			1,
			{
				"skipBlankLines": true
			}
		],
		"no-undef": 2,
		"no-undef-init": 1,
		"no-undefined": 1,
		"no-underscore-dangle": 0,
		"no-unexpected-multiline": 2,
		"no-unneeded-ternary": 0,
		"no-unreachable": 2,
		"no-unused-expressions": 2,
		"no-unused-vars": 0,
		"no-use-before-define": 0,
		"no-var": 0,
		"no-void": 0,
		"no-warning-comments": 0,
		"no-with": 0,
		"object-curly-spacing": [
			0,
			"always",
			{
				"arraysInObjects": false,
				"objectsInObjects": false
			}
		],
		"object-shorthand": 0,
		"one-var": 0,
		"operator-assignment": 0,
		"padded-blocks": [
			1,
			"never"
		],
		"prefer-const": 0,
		"prefer-reflect": 0,
		"prefer-rest-params": 0,
		"prefer-spread": 0,
		"quote-props": 0,
		// "quotes": [
		// 	1,
		// 	"single",
		// 	"avoid-escape"
		// ],
		"radix": 0,
		"require-yield": 0,
		"semi": [
			2,
			"always"
		],
		"semi-spacing": 1,
		"sort-vars": 0,
		"space-before-blocks": 0,
		"space-before-function-paren": 0,
		"space-in-parens": 0,
		"space-infix-ops": 0,
		"space-unary-ops": 0,
		"spaced-comment": 0,
		"use-isnan": 0,
		"valid-jsdoc": 0,
		"valid-typeof": 2,
		"vars-on-top": 0,
		"wrap-iife": [
			2,
			"any"
		],
		"wrap-regex": 0,
		"yoda": 0
	},
	parserOptions: {
		parser: "babel-eslint"
	}
};