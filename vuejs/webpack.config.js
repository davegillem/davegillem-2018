var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: ['./js/app.js', './sass/app.scss'],
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '', //'/dist/',
		filename: 'js/app-min.js'
	},
	module: {
		rules: [
			{ // regular css files
				test: /\.css$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{ // sass / scss loader for webpack
				test: /\.(sass|scss)$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': [
							'vue-style-loader',
							'css-loader',
							'sass-loader'
						],
						'sass': [
							'vue-style-loader',
							'css-loader',
							'sass-loader?indentedSyntax'
						]
					}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					//name: './images/[name].[ext]?[hash]'
					name: '../images/[name].[ext]?[hash]'
					//name: path.join(__dirname, '/images/[name].[ext]?[hash]')
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
};

//if (process.env.NODE_ENV === 'production') {
module.exports.devtool = '#source-map';
// http://vue-loader.vuejs.org/en/workflow/production.html
module.exports.plugins = (module.exports.plugins || [])
	.concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new ExtractTextPlugin({ // define where to save the file
			filename: './css/app-min.css',
			allChunks: true
		}),
		new CopyWebpackPlugin([
			{from: 'index.html', to: './index.html'},
			//{from:'./data', to:'./data'}, // Not using Behance JSON right now
			{from: './images', to: './images'},
			{from: './favicon.ico', to: './favicon.ico'}
		])
	]);
//}
