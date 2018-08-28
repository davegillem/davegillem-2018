const _ = require('lodash');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const paths = require('./paths');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
	const loaders = [
		require.resolve('style-loader'),
		{
			loader: require.resolve('css-loader'),
			options: cssOptions
		},
		{
			// Options for PostCSS as we reference these options twice
			// Adds vendor prefixing based on your specified browser support in
			// package.json
			loader: require.resolve('postcss-loader'),
			options: {
				// Necessary for external CSS imports to work
				// https://github.com/facebook/create-react-app/issues/2677
				ident: 'postcss',
				sourceMap: true,
				plugins: () => [
					require('postcss-flexbugs-fixes'),
					autoprefixer({
						flexbox: 'no-2009',
					}),
				],
			},
		},
	];
	if (preProcessor) {
		loaders.push(preProcessor);
	}
	return loaders;
};

const defaults = {
	devtool: 'source-map',
	entry: [
		// We ship a few polyfills by default:
		require.resolve('./polyfills'),
		paths.appIndexJs
		// We include the app code last so that if there is a runtime error during
		// initialization, it doesn't blow up the WebpackDevServer client, and
		// changing JS code would still trigger a refresh.
	],
	resolve: {
		// This allows you to set a fallback for where Webpack should look for modules.
		// We placed these paths second because we want `node_modules` to "win"
		// if there are any conflicts. This matches Node resolution mechanism.
		// https://github.com/facebookincubator/create-react-app/issues/253
		modules: ['node_modules', paths.appNodeModules].concat(
			// It is guaranteed to exist because we tweak it in `env.js`
			process.env.NODE_PATH.split(path.delimiter)
			.filter(Boolean) // eslint-disable-line
		),
		// These are the reasonable defaults supported by the Node ecosystem.
		// We also include JSX as a common component filename extension to support
		// some tools, although we do not recommend using it, see:
		// https://github.com/facebookincubator/create-react-app/issues/290
		// `web` extension prefixes have been added for better support
		// for React Native Web.
		extensions: [
			'.mjs',
			'.web.ts',
			'.ts',
			'.web.tsx',
			'.tsx',
			'.web.js',
			'.js',
			'.json',
			'.web.jsx',
			'.jsx'
		],
		alias: {
			// Support React Native Web
			// https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
			'react-native': 'react-native-web'
		},
		plugins: [
			// Prevents users from importing files from outside of src/ (or node_modules/).
			// This often causes confusion because we only process files within src/ with babel.
			// To fix this, we prevent you from importing files out of src/ -- if you'd like to,
			// please link the files into your node_modules/ and let module-resolution kick in.
			// Make sure your source files are compiled, as they will not be processed in any way.
			new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
			new TsconfigPathsPlugin({
				configFile: paths.appTsConfig
			}),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify(process.env.NODE_ENV)
				}
			})
		]
	},
	module: {
		strictExportPresence: true,
		rules: [
			// Disable require.ensure as it's not a standard language feature.
			// {
			// 	parser: {
			// 		requireEnsure: false
			// 	}
			// },

			// First, run the linter.
			// It's important to do this before Babel processes the JS.
			{
				test: /\.(js|jsx|mjs)$/,
				loader: require.resolve('source-map-loader'),
				enforce: 'pre',
				include: paths.appSrc
			},
			{
				// "oneOf" will traverse all following loaders until one will
				// match the requirements. When no loader matches it will fall
				// back to the "file" loader at the end of the loader list.
				oneOf: [
					// "url" loader works like "file" loader except that it embeds assets
					// smaller than specified limit in bytes as data URLs to avoid requests.
					// A missing `test` is equivalent to a match.
					{
						test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
						loader: require.resolve('url-loader'),
						options: {
							limit: 10000,
							name: 'images/[name].[ext]'
						},
					},
					// Process application JS with Babel.
					// The preset includes JSX, Flow, and some ESnext features.
					{
						test: /\.(js|jsx|mjs)$/,
						include: paths.srcPaths,
						exclude: [/[/\\\\]node_modules[/\\\\]/],
						use: [
							// This loader parallelizes code compilation, it is optional but
							// improves compile time on larger projects
							{
								loader: require.resolve('thread-loader'),
								options: {
									poolTimeout: Infinity // keep workers alive for more effective watch mode
								},
							},
							{
								loader: require.resolve('babel-loader'),
								options: {
									compact: true
								}
							},
						],
					},
					// Compile .tsx
					{
						test: /\.(ts|tsx)$/,
						include: paths.appSrc,
						use: [{
							loader: require.resolve('ts-loader'),
							options: {
								// disable type checker - we will use it in fork plugin
								transpileOnly: true,
								configFile: paths.appTsProdConfig
							}
						}]
					},
					// "postcss" loader applies autoprefixer to our CSS.
					// "css" loader resolves paths in CSS and adds assets as dependencies.
					// "style" loader turns CSS into JS modules that inject <style> tags.
					// In production, we use a plugin to extract that CSS to a file, but
					// in development "style" loader enables hot editing of CSS.
					// By default we support CSS Modules with the extension .module.css
					{
						test: cssRegex,
						exclude: cssModuleRegex,
						use: getStyleLoaders({
							importLoaders: 1
						}),
					},
					// Opt-in support for SASS (using .scss or .sass extensions).
					// Chains the sass-loader with the css-loader and the style-loader
					// to immediately apply all styles to the DOM.
					// By default we support SASS Modules with the
					// extensions .module.scss or .module.sass
					{
						test: sassRegex,
						exclude: sassModuleRegex,
						use: getStyleLoaders({
							importLoaders: 2
						}, {
							loader: require.resolve('sass-loader'),
							options: {
								sourceMap: true,
								includePaths: [
									path.join(path.dirname(module.filename), 'node_modules'),
									'node_modules/'
								]
							}
						}),
					},
					// The GraphQL loader preprocesses GraphQL queries in .graphql files.
					{
						test: /\.(graphql)$/,
						loader: 'graphql-tag/loader',
					},
					// "file" loader makes sure those assets get served by WebpackDevServer.
					// When you `import` an asset, you get its (virtual) filename.
					// In production, they would get copied to the `build` folder.
					// This loader doesn't use a "test" so it will catch all modules
					// that fall through the other loaders.
					{
						// Exclude `js` files to keep "css" loader working as it injects
						// its runtime that would otherwise be processed through "file" loader.
						// Also exclude `html` and `json` extensions so they get processed
						// by webpacks internal loaders.
						exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
						loader: require.resolve('file-loader'),
						options: {
							name: 'images/[name].[ext]'
						},
					},
				],
			},
			// ** STOP ** Are you adding a new loader?
			// Make sure to add the new loader(s) before the "file" loader.
		],
	},
	// Some libraries import Node modules but don't use them in the browser.
	// Tell Webpack to provide empty mocks for them so importing them works.
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},
	// Turn off performance processing because we utilize
	// our own hints via the FileSizeReporter
	performance: false,
};
module.exports.defaults = defaults;
module.exports.extend = function merge(config) {
	return _.extend({}, defaults, config);
};
module.exports.merge = function merge(config) {
	return _.merge({}, defaults, config);
};
