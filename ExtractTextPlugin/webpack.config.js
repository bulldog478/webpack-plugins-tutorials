var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var config = {
	entry:path.resolve(__dirname,'app.js'),
	output:{
		path:'./build',
		filename:'bundle.js'
	},
	module:{
			loaders:[
				{
					test:/\.css$/,
					loader:ExtractTextPlugin.extract('style','css')
				}
			]
	},
	plugins:[
		new ExtractTextPlugin('bundle.css'),
		new webpack.ProvidePlugin({
			'$':'jquery'
		})
	]
}

module.exports = config