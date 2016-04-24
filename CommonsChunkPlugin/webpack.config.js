var path = require('path')
var webpack = require('webpack');

var config = {
	entry:{
		app:path.resolve(__dirname , 'js/a.js'),
		vendors:['./libs/jquery.js','./libs/underscore.js']
	},
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:'[name].js'
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js')
	]
}

module.exports = config