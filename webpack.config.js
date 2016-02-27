'use strict'

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './index.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ["", ".js", ".jsx"],
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			loader: 'babel-loader'
		}, {
			test: /\.less$/,
			loader: ExtractTextPlugin.extract('style', 'css!less')
		}]
	},
	plugins: [
		new ExtractTextPlugin('index.css')
	]
}