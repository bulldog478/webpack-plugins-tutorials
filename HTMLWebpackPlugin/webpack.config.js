var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

var config = {
	entry:path.resolve(__dirname, 'app.js'),
	output:{
		path:'./build',
		publicPath:'.',
		filename:'[name].[hash].js'
	},
	module:{
		loaders:[
			{
				test:/\.jade$/,
				loader:'jade-loader',
				query:{
					pretty:true
				}
			}
		]
	},
	// resolve:{
	// 	alias:{
	// 		'angular':'../node_modules/angular/angular.min.js'
	// 	}
	// },
	plugins:[
		// new webpack.ProvidePlugin({
		// 	'angular':'angular'
		// }),
		new htmlWebpackPlugin({
			title:'htmlWebpackPlugin demo',
			template:'index.jade',
			inject:'body'
		})
	],
	devtool:'source-map'
}
module.exports = config