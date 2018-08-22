// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
	browser: true,
	node: true,
	es6: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
	//`plugin:vue/strongly-recommended`,
	'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
	'standard'
  ],
  // required to lint *.vue files
  plugins: [
	'vue'
  ],
  // add your custom rules here
  rules: {
	'vue/html-indent': ["error", "tab", {
		"attribute": 1,
		"closeBracket": 0,
		"ignores": []
	}],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
	'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	// --- Possible Errors
	"comma-dangle": [2, "never"], // disallow trailing commas in object literals
	"no-cond-assign": [2, "always"], // disallow assignment in conditional expressions
	"no-constant-condition": 2, // disallow use of constant expressions in conditions
	"no-control-regex": 2, // disallow control characters in regular expressions
	"no-dupe-keys": 2, // disallow duplicate keys when creating object literals
	"no-duplicate-case": 2,
	"no-empty-character-class": 2,
	"no-empty": 2, // disallow empty statements
	"no-ex-assign": 2, // disallow assigning to the exception in a catch block
	"no-extra-boolean-cast": 0, // disallow double-negation boolean casts in a boolean context
	"no-extra-semi": 2, // disallow unnecessary semicolons
	"no-func-assign": 0, // disallow overwriting functions written as function declarations
	"no-inner-declarations": 0, // [2,"both"],   // disallow function or variable declarations in nested blocks
	"no-invalid-regexp": 2, // disallow invalid regular expression strings in the RegExp constructor
	"no-irregular-whitespace": 0, // disallow irregular whitespace outside of strings and comments
	"no-negated-in-lhs": 0, // disallow negation of the left operand of an in expression
	"no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions
	"no-regex-spaces": 2, // disallow multiple spaces in a regular expression literal
	"no-sparse-arrays": 2, // disallow sparse arrays
	"no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
	"use-isnan": 0, // disallow comparisons with the value NaN
	"valid-jsdoc": 0, // Ensure JSDoc comments are valid (off by default)
	"valid-typeof": 2, // Ensure that the results of typeof are compared against a valid string
	////////// Best Practices //////////
	"no-unexpected-multiline": 2,
	"accessor-pairs": 0,
	"block-scoped-var": 2, // treat var statements as if they were block scoped (off by default)
	"complexity": 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
	"consistent-return": 0, // require return statements to either always or never specify values
	"curly": [2,"all"], // specify curly brace conventions for all control statements
	"default-case": 0, // require default case in switch statements (off by default)
	"dot-notation": 1, // encourages use of dot notation whenever possible
	"eqeqeq": 2, // require the use of === and !==
	"guard-for-in": 2, // make sure for-in loops have an if statement (off by default)
	"no-alert": 2, // disallow the use of alert, confirm, and prompt
	"no-caller": 0, // disallow use of arguments.caller or arguments.callee
	"no-div-regex": 0, // disallow division operators explicitly at beginning of regular expression (off by default)
	"no-else-return": 0, // disallow else after a return in an if (off by default)
	"no-empty-label": 0, // disallow use of labels for anything other then loops and switches
	"no-eq-null": 0, // disallow comparisons to null without a type-checking operator (off by default)
	"no-eval": 2, // disallow use of eval()
	"no-extend-native": 0, // disallow adding to native types
	"no-extra-bind": 2, // disallow unnecessary function binding
	"no-fallthrough": 2, // disallow fallthrough of case statements
	"no-floating-decimal": 0, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
	"no-implicit-coercion": 0,
	"no-implied-eval": 2, // disallow use of eval()-like methods
	"no-iterator": 0, // disallow usage of __iterator__ property
	"no-labels": 0, // disallow use of labeled statements
	"no-lone-blocks": 2, // disallow unnecessary nested blocks
	"no-loop-func": 2, // disallow creation of functions within loops
	"no-multi-spaces": 0, // disallow use of multiple spaces
	"no-multi-str": 0, // disallow use of multiline strings
	"no-native-reassign": 2, // disallow reassignments of native objects
	"no-new": 0, // disallow use of new operator when not part of the assignment or comparison
	"no-new-func": 2, // disallow use of new operator for Function object
	"no-new-wrappers": 2, // disallows creating new instances of String, Number, and Boolean
	"no-octal": 2, // disallow use of octal literals
	"no-octal-escape": 0, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
	"no-param-reassign": 2,
	"no-process-env": 2, // disallow use of process.env (off by default)
	"no-proto": 2, // disallow usage of __proto__ property
	"no-redeclare": 2, // disallow declaring the same variable more then once
	"no-return-assign": 0, // disallow use of assignment in return statement
	"no-script-url": 0, // disallow use of javascript: urls.
	"no-self-compare": 2, // disallow comparisons where both sides are exactly the same (off by default)
	"no-sequences": 0, // disallow use of comma operator
	"no-throw-literal": 2,
	"no-unused-expressions": 2, // disallow usage of expressions in statement position
	"no-void": 0, // disallow use of void operator (off by default)
	"no-warning-comments": 0, // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
	"no-with": 0, // disallow use of the with statement
	"radix": 0, // require use of the second argument for parseInt() (off by default)
	"vars-on-top": 0, // requires to declare all vars on top of their containing scope (off by default)
	"wrap-iife": [2,"any"], // require immediate function invocation to be wrapped in parentheses (off by default)
	"yoda": 0, // require or disallow Yoda conditions
	////////// Variables //////////
	"init-declarations": 0,
	"no-catch-shadow": 1, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
	"no-delete-var": 2, // disallow deletion of variables
	"no-label-var": 0, // disallow labels that share a name with a variable
	"no-shadow": [
		2,
		{
			"builtinGlobals": false,
			"hoist": "functions"
		}
	], // disallow declaration of variables already declared in the outer scope
	"no-shadow-restricted-names": 2, // disallow shadowing of names such as arguments
	"no-undef": 2, // ** CHANGED DG 9.12.15** // disallow use of undeclared variables unless mentioned in a /*global */ block
	"no-undef-init": 1, // ** CHANGED DG 9.12.15** // disallow use of undefined when initializing variables
	"no-undefined": 1, // ** CHANGED DG 9.12.15** // disallow use of undefined variable (off by default)
	"no-unused-vars": 0, //1,          // disallow declaration of variables that are not used in the code
	"no-use-before-define": 0, // disallow use of variables before they are defined
	////////// Node.js //////////
	"callback-return": 0,
	"handle-callback-err": 0, // enforces error handling in callbacks (off by default) (on by default in the node environment)
	"no-mixed-requires": 0, // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
	"no-new-require": 0, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
	"no-path-concat": 0, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
	"no-process-exit": 0, // disallow process.exit() (on by default in the node environment)
	"no-restricted-modules": 0, // restrict usage of specified node modules (off by default)
	"no-sync": 0, // disallow use of synchronous methods (off by default)
	////////// Stylistic Issues //////////
	"array-bracket-spacing": [
		2,
		"never",
		{}
	],
	"brace-style": [
		1,
		"1tbs",
		{
			"allowSingleLine": true
		}
	], // enforce one true brace style (off by default)
	"camelcase": 0, // require camel case names
	"comma-spacing": [
		1,
		{
			"after": true
		}
	], // enforce spacing before and after comma
	"comma-style": 1, // enforce one true comma style (off by default)
	"consistent-this": 0, // enforces consistent naming when capturing the current execution context (off by default)
	"eol-last": 0, // enforce newline at the end of file, with no multiple empty lines
	"func-names": 0, // require function expressions to have a name (off by default)
	"func-style": 0, // enforces use of function declarations or expressions (off by default)
	"id-length": 0,
	"indent": [2, 'tab'],
	"key-spacing": 0, // enforces spacing between keys and values in object literal properties
	"lines-around-comment": 0,
	"linebreak-style": 0,
	"max-nested-callbacks": 0, // specify the maximum depth callbacks can be nested (off by default)
	"new-cap": 0, // require a capital letter for constructors
	"new-parens": 2, // disallow the omission of parentheses when invoking a constructor with no arguments
	"newline-after-var": 0,
	"no-array-constructor": 0, // disallow use of the Array constructor
	"no-continue": 0,
	"no-inline-comments": 0, // disallow comments inline after code (off by default)
	"no-lonely-if": 0, // disallow if as the only statement in an else block (off by default)
	"no-mixed-spaces-and-tabs": 0, //[1,"smart-tabs"],  // disallow mixed spaces and tabs for indentation
	"no-multiple-empty-lines": 1, // disallow multiple empty lines (off by default)
	"no-nested-ternary": 0, // disallow nested ternary expressions (off by default)
	"no-new-object": 0, // disallow use of the Object constructor
	//"no-space-before-semi"      : 1,              // disallow space before semicolon
	"no-spaced-func": 1, // disallow space between function identifier and application
	"no-tabs":0,
	"no-ternary": 0, // disallow the use of ternary operators (off by default)
	"no-trailing-spaces": [
		1,
		{
			"skipBlankLines": true
		}
	], // disallow trailing whitespace at the end of lines
	"no-underscore-dangle": 0, //2, Still need this allowed for DataTables     // disallow dangling underscores in identifiers
	"no-unneeded-ternary": 0,
	"object-curly-spacing": [
		1,
		"never",
		{}
	],
	"one-var": 0, //1,          // allow just one var statement per function (off by default)
	"operator-assignment": 0, // require assignment operator shorthand where possible or prohibit it entirely (off by default)
	"operator-linebreak": [
		1,
		"before"
	], // enforce consistent linebreak style for operators
	"padded-blocks": [
		1,
		"never"
	], // enforce padding within blocks (off by default)
	"quote-props": 0, //[1,"consistent-as-needed"], // require quotes around object literal property names (off by default)
	"quotes": [
		1,
		"single",
		"avoid-escape"
	], // specify whether double or single quotes should be used
	"id-match": 0,
	"semi-spacing": 1,
	"semi": [
		2,
		"always"
	], // require or disallow use of semicolons instead of ASI
	"sort-vars": 0, // sort variables within the same declaration block (off by default)
	//"space-after-function-name" : 0,              // require a space after function names (off by default)
	//"space-after-keywords"      : 0,              // require a space after certain keywords (off by default)
	"keyword-spacing": 1,
	"space-before-blocks": 0, // require or disallow space before blocks (off by default)
	"space-before-function-paren": 0,
	//"space-in-brackets"         : 0,              // require or disallow spaces inside brackets (off by default)
	"space-in-parens": 0, // require or disallow spaces inside parentheses (off by default)
	"space-infix-ops": 0, // require spaces around operators
	//"space-return-throw-case"   : 1,              // require a space after return, throw, and case
	"space-unary-ops": 0, // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
	"spaced-comment": 0, // require or disallow a space immediately following the // in a line comment (off by default)
	"wrap-regex": 0, // require regex literals to be wrapped in parentheses (off by default)
	////////// ECMAScript 6 //////////
	"arrow-parens": 0,
	"arrow-spacing": 0,
	"constructor-super": 0,
	"no-class-assign": 0,
	"no-const-assign": 2,
	"no-this-before-super": 0,
	"no-var": 0,
	"object-shorthand": 0,
	"prefer-const": 0,
	"prefer-spread": 0,
	"prefer-reflect": 0,
	"require-yield": 0,
	////////// Legacy //////////
	"max-depth": 0, // specify the maximum depth that blocks can be nested (off by default)
	"max-len": 0, // specify the maximum length of a line in your program (off by default)
	"max-params": 0, // limits the number of parameters that can be used in the function declaration. (off by default)
	"max-statements": 0, // specify the maximum number of statement allowed in a function (off by default)
	"no-bitwise": 0, // disallow use of bitwise operators (off by default)
	"no-plusplus": 0 // disallow use of unary operators, ++ and -- (off by default)
}
};