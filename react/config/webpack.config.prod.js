const baseConfig = require('./webpack.config.base');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const publicPath = paths.servedPath;
const shouldUseRelativeAssetPaths = publicPath === './';
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'true'; // eslint-disable-line
const publicUrl = publicPath.slice(0, -1);
const cssFilename = 'css/app.css';
const extractTextPluginOptions = shouldUseRelativeAssetPaths ? {
	publicPath: Array(cssFilename.split('/')
			.length)
		.join('../')
} : {};
const env = getClientEnvironment(publicUrl);
const CopyWebpackPlugin = require('copy-webpack-plugin');

if (env.stringified['process.env'].NODE_ENV !== '"production"') {
	throw new Error('Production builds must have NODE_ENV=production.');
}

module.exports = baseConfig.merge({
	bail: true,
	devtool: 'source-map',
	output: {
		path: paths.appBuild,
		filename: 'js/app.js',
		chunkFilename: 'js/app.chunk.js',
		publicPath: publicPath,
		devtoolModuleFilenameTemplate: info =>
			path
			.relative(paths.appSrc, info.absoluteResourcePath)
			.replace(/\\/g, '/')
	},
	module: {
		strictExportPresence: true,
		rules: [
			// TypeScript Linting
			{
				test: /\.(ts|tsx)$/,
				loader: require.resolve('tslint-loader'),
				enforce: 'pre',
				include: paths.appSrc
			},
			// JS/JSX JavaScript/REACT
			{
				test: /\.(js|jsx|mjs)$/,
				loader: require.resolve('source-map-loader'),
				enforce: 'pre',
				include: paths.appSrc
			},
			// EXCLUDES
			{
				exclude: [
					/\.html$/,
					/\.(js|jsx)$/,
					/\.(ts|tsx)$/,
					/\.css$/,
					/\.scss$/,
					/\.json$/,
					/\.bmp$/,
					/\.gif$/,
					/\.jpe?g$/,
					/\.png$/
				],
				loader: require.resolve('file-loader'),
				options: {
					name: 'images/[name].[ext]'
				}
			},
			// IMAGES
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: require.resolve('url-loader'),
				options: {
					limit: 10000,
					name: 'images/[name].[ext]'
				}
			},
			// TS/TSX TypeScript
			{
				test: /\.(ts|tsx)$/,
				include: paths.appSrc,
				use: [{
					loader: require.resolve('ts-loader'),
					options: {
						transpileOnly: true,
						configFile: paths.appTsProdConfig
					}
				}]
			},
			// CSS
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					Object.assign({
							fallback: require.resolve('style-loader'),
							use: [{
									loader: require.resolve('css-loader'),
									options: {
										importLoaders: 1,
										minimize: true,
										sourceMap: true
									}
								},
								{
									loader: require.resolve('postcss-loader'),
									options: {
										ident: 'postcss',
										plugins: () => [
											require('postcss-flexbugs-fixes'),
											autoprefixer({
												browsers: [
													'>1%',
													'last 4 versions',
													'Firefox ESR',
													'not ie < 9'
												],
												flexbox: 'no-2009'
											})
										]
									}
								}
							]
						},
						extractTextPluginOptions
					)
				)
			},
			// SASS/SCSS
			{
				test: /\.(sass|scss)$/,
				loader: ExtractTextPlugin.extract(
					Object.assign({
						fallback: require.resolve('style-loader'),
						use: [{
								loader: require.resolve('css-loader'),
								options: {
									importLoaders: 1,
									minimize: true,
									sourceMap: true
								}
							},
							{
								loader: require.resolve('postcss-loader'),
								options: {
									ident: 'postcss',
									plugins: () => [
										require('postcss-flexbugs-fixes'),
										autoprefixer({
											browsers: [
												'>1%',
												'last 4 versions',
												'Firefox ESR',
												'not ie < 9'
											],
											flexbox: 'no-2009'
										})
									]
								}
							},
							{
								loader: require.resolve('sass-loader'),
								options: {
									sourceMap: true,
									includePaths: [
										path.join(path.dirname(module.filename), 'node_modules'),
										'node_modules/'
									]
								}
							}
						]
					})
				)
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: paths.appHtml,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new InterpolateHtmlPlugin(env.raw),
		new webpack.DefinePlugin(env.stringified),
		new UglifyJsPlugin({
			uglifyOptions: {
				parse: {
					ecma: 8
				},
				compress: {
					ecma: 5,
					warnings: false,
					comparisons: false
				},
				mangle: {
					safari10: true
				},
				output: {
					ecma: 5,
					comments: false,
					ascii_only: true
				}
			},
			parallel: true,
			cache: true,
			sourceMap: shouldUseSourceMap
		}),
		new ExtractTextPlugin({
			filename: cssFilename,
			allChunks: true
		}),
		new ManifestPlugin({
			fileName: 'asset-manifest.json'
		}),
		new SWPrecacheWebpackPlugin({
			dontCacheBustUrlsMatching: /\.\w{8}\./,
			filename: 'service-worker.js',
			logger(message) {
				if (message.indexOf('Total precache size is') === 0) {
					return;
				}
				if (message.indexOf('Skipping static resource') === 0) {
					return;
				}
				console.log(message);
			},
			minify: true,
			navigateFallback: publicUrl + '/index.html',
			navigateFallbackWhitelist: [/^(?!\/__).*/],
			staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
		}),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new ForkTsCheckerWebpackPlugin({
			async: false,
			tsconfig: paths.appTsProdConfig,
			tslint: paths.appTsLint
		}),
		new CopyWebpackPlugin([
			//{ from: 'src/index.html', to: './index.html' },
			//{from:'./data', to:'./data'}, // Not using Behance JSON right now
			{
				from: 'src/assets',
				to: './images'
			}
		])
	]
});
