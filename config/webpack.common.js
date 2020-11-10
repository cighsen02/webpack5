const paths = require('./paths')

const {	VueLoaderPlugin } = require('vue-loader')
const {	CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// Where webpack looks to start building the bundle
	entry: [paths.src + '/main.js'],

	// Where webpack outputs the assets and bundles
	output: {
		path: paths.build,
		filename: '[name].bundle.js',
		publicPath: '/',
	},
	
	resolve: {
		alias: {
			// this isn't technically needed, since the default `vue` entry for bundlers
			// is a simple `export * from '@vue/runtime-dom`. However having this
			// extra re-export somehow causes webpack to always invalidate the module
			// on the first HMR update and causes the page to reload.
			'vue': '@vue/runtime-dom'
		}
	},

	// Customize the webpack build process
	plugins: [
		// Removes/cleans build folders and unused assets when rebuilding
		new CleanWebpackPlugin(),
		
		new VueLoaderPlugin(),

		// Copies files from target to destination folder
		new CopyWebpackPlugin({
			patterns: [{
				from: paths.public,
				to: 'assets',
				globOptions: {
					ignore: ['*.DS_Store'],
				},
			}, ],
		}),

		// Generates an HTML file from a template
		// Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
		new HtmlWebpackPlugin({
			title: 'webpack 5',
			favicon: paths.src + '/images/favicon.png',
			template: paths.src + '/index.html', // template file
			filename: 'index.html', // output file
		}),
	],

	// Determine how modules within the project are treated
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},

			// JavaScript: Use Babel to transpile JavaScript files
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			
			{
				test: /\.png$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}
			},

			// Styles: Inject CSS into the head with source maps
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					},
				],
			},

			// Images: Copy image files to build folder
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource'
			},

			// Fonts and SVGs: Inline files
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline'
			},
		],
	},
}