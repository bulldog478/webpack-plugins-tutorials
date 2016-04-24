var path = require('path');
var webpack = require('webpack');

config = {
	entry:{
		app:path.resolve(__dirname,'app.js')
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		publicPath:'dist/',
		filename:'[name].js'
	},
	plugins:[
		new webpack.ProvidePlugin({
			'$':'jquery'
		})
	],
	devtool:'source-map'
}

module.exports = config