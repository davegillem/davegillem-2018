const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin-alt');
const getClientEnvironment = require('./env');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const paths = require('./paths');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const webpack = require('webpack');

const allCssRegex = /\.(sa|sc|c)ss$/;
const cssFilename = 'css/[name].css';
const shouldUseSourceMap = process.env.NODE_ENV === 'development';
const ensureArray = (config) => (config && (Array.isArray(config) ? config : [config])) || []; // eslint-disable-line
const when = (condition, config, negativeConfig) => (condition ? ensureArray(config) : ensureArray(negativeConfig));

module.exports = function(webpackEnv) {
	const isEnvDevelopment = webpackEnv === 'development';
	const isEnvProduction = webpackEnv === 'production';
	const publicPath = isEnvProduction ? paths.servedPath : '/';
	const publicUrl = isEnvProduction ? publicPath.slice(0, -1) : '';
	const env = getClientEnvironment(publicUrl);
	console.log('IS PRODUCTION?', isEnvProduction);
	const config = {
		mode: isEnvProduction ? 'production' : 'development',
		bail: isEnvProduction,
		devtool: isEnvProduction ? 'source-map' : 'cheap-module-source-map',
		entry: isEnvProduction
			? {
					app: [require.resolve('./polyfills'), paths.appIndexJs],
			  }
			: {
					app: [
						require.resolve('./polyfills'),
						paths.appIndexJs,
						require.resolve('react-dev-utils/webpackHotDevClient'),
					],
			  },
		output: {
			path: isEnvProduction ? paths.appBuild : paths.appPublic,
			pathinfo: isEnvDevelopment,
			filename: 'js/[name].js',
			chunkFilename: 'js/[name].chunk.js',
			publicPath: publicPath,
			devtoolModuleFilenameTemplate: isEnvProduction
				? (info) =>
						path // eslint-disable-line
							.relative(paths.appSrc, info.absoluteResourcePath)
							.replace(/\\/g, '/')
				: (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
		},
		optimization: {
			minimize: isEnvProduction,
			minimizer: [
				...when(isEnvProduction, [
					new TerserPlugin({
						terserOptions: {
							parse: {
								ecma: 8,
							},
							compress: {
								ecma: 5,
								warnings: false,
								comparisons: false,
								inline: 2,
							},
							mangle: {
								safari10: true,
							},
							output: {
								ecma: 5,
								comments: false,
								ascii_only: true,
							},
						},
						parallel: true,
						cache: true,
						sourceMap: shouldUseSourceMap,
					}),
					new OptimizeCSSAssetsPlugin({}),
				]),
			],
			namedModules: isEnvDevelopment,
		},
		resolve: {
			modules: ['node_modules', paths.appNodeModules].concat(
				process.env.NODE_PATH.split(path.delimiter).filter(Boolean),
			),
			extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
			alias: {
				'react-native': 'react-native-web',
			},
			plugins: [
				PnpWebpackPlugin,
				new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
				new TsconfigPathsPlugin({
					configFile: paths.appTsConfig,
				}),
			],
		},
		resolveLoader: {
			plugins: [PnpWebpackPlugin.moduleLoader(module)],
		},
		module: {
			strictExportPresence: true,
			rules: [
				{
					parser: {
						requireEnsure: false,
					},
				},
				{
					test: /\.(js|jsx)$/,
					enforce: 'pre',
					use: [
						{
							options: {
								formatter: require.resolve('react-dev-utils/eslintFormatter'),
								eslintPath: require.resolve('eslint'),
							},
							loader: require.resolve('eslint-loader'),
						},
					],
					include: paths.appSrc,
				},
				{
					oneOf: [
						{
							test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
							loader: require.resolve('url-loader'),
							options: {
								limit: 10000,
								name: 'images/[name].[ext]',
							},
						},
						{
							test: /\.(js|jsx|ts|tsx)$/,
							include: paths.appSrc,
							loader: require.resolve('babel-loader'),
							options: {
								customize: require.resolve('babel-preset-react-app/webpack-overrides'),
								plugins: [
									[
										require.resolve('babel-plugin-named-asset-import'),
										{
											loaderMap: {
												svg: {
													ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
												},
											},
										},
									],
								],
								cacheDirectory: true,
								cacheCompression: isEnvProduction,
								compact: isEnvProduction,
							},
						},
						{
							test: /\.(js)$/,
							exclude: /@babel(?:\/|\\{1,2})runtime/,
							loader: require.resolve('babel-loader'),
							options: {
								babelrc: false,
								configFile: false,
								compact: false,
								presets: [
									[
										require.resolve('babel-preset-react-app/dependencies'),
										{
											helpers: true,
										},
									],
								],
								cacheDirectory: true,
								cacheCompression: isEnvProduction,
								sourceMaps: false,
							},
						},
						{
							test: allCssRegex,
							use: [
								isEnvProduction
									? MiniCssExtractPlugin.loader
									: {
											loader: 'style-loader',
											options: {},
									  },
								{
									loader: 'css-loader',
								},
								{
									loader: 'sass-loader',
									options: {},
								},
							],
						},
						{
							exclude: [/\.(js|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
							loader: require.resolve('file-loader'),
							options: {
								name: 'images/[name].[ext]',
							},
						},
					],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				inject: isEnvDevelopment,
				template: isEnvProduction ? paths.appHtmlProd : paths.appHtmlDev,
				minify: {
					removeComments: true,
					collapseWhitespace: false,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeStyleLinkTypeAttributes: true,
					keepClosingSlash: true,
					minifyJS: true,
					minifyCSS: true,
					minifyURLs: true,
				},
			}),
			new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
			...when(isEnvDevelopment, new webpack.NamedModulesPlugin()),
			new ModuleNotFoundPlugin(paths.appPath),
			new webpack.DefinePlugin(env.stringified),
			...when(isEnvDevelopment, [
				new webpack.HotModuleReplacementPlugin(),
				new CaseSensitivePathsPlugin(),
				new WatchMissingNodeModulesPlugin(paths.appNodeModules),
			]),
			...when(
				isEnvProduction,
				new MiniCssExtractPlugin({
					filename: cssFilename,
				}),
			),
			new ManifestPlugin({
				fileName: 'asset-manifest.json',
				publicPath: publicPath,
			}),
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
			new ForkTsCheckerWebpackPlugin({
				async: false,
				eslint: true,
				watch: paths.appSrc,
				tsconfig: paths.appTsConfig,
			}),
			...when(
				!isEnvProduction,
				new ForkTsCheckerNotifierWebpackPlugin({
					title: 'TypeScript',
					excludeWarnings: false,
				}),
			),
			...when(
				isEnvProduction,
				new CopyWebpackPlugin([
					{
						from: 'src/assets',
						to: './images',
					},
				]),
			),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				},
			}),
		],
		node: {
			dgram: 'empty',
			fs: 'empty',
			net: 'empty',
			tls: 'empty',
			child_process: 'empty',
		},
		performance: false,
	};
	return config;
};
