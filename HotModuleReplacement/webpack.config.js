var path = require('path'),
	  webpack = require('webpack')
module.exports ={
	entry:[path.resolve(__dirname,'app.js')],
	output:{
		path:path.resolve(__dirname,'build'),
		publicPath:'build/',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/, 
				loader:'babel'
			},
			{
				test:/\.html$/,
				loader:'raw'
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	devtool:'source-map'
}