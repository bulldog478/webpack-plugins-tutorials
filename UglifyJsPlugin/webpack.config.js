var path = require('path')
var Webpack = require('webpack')
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin')

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV==="deploy";
var config = {
	entry:{
		app:path.resolve(__dirname,'app.js'),
		vendors:['angular']
	},
	output:{
		path:'./build',
		public:'build/',
		filename:'[name].js'
	},
	plugins:[
		new Webpack.optimize.CommonsChunkPlugin('vendors','vendors.js')
	]
}
if(isProd){
	config.plugins.push(
		new ngAnnotatePlugin({
			add:true
		}),
		new Webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
	)

	config.devtool = "source-map"
}
	
module.exports = config