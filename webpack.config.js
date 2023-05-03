/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-tabs */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction
	? MiniCssExtractPlugin.loader
	: 'style-loader';

const config = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: "/",
	},
	devServer: {
		open: true,
		host: 'localhost',
		port: 8080,
		// added / instead of /api :
		proxy: {
			'/': 'http://localhost:3000',
		},
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		new MiniCssExtractPlugin({ filename: './input.css' }),
		new Dotenv()

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(?:js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: 'defaults' }],
							'@babel/preset-react',
						],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: { extensions: ['.js', '.jsx'] },
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';

		config.plugins.push(new MiniCssExtractPlugin({ filename: './input.css' }));
	} else {
		config.mode = 'development';
	}
	return config;
};
