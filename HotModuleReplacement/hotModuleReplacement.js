var webpack = require('webpack')
		,webpackDevServer = require('webpack-dev-server')
		,webpackConfig = require('./webpack.config.js')

// webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(webpackConfig)

var bundler = new webpackDevServer(compiler,{
	hot: true,
	quiet: false,
	stats:{
		colors: true
	}
})

bundler.listen(9001, 'localhost',function(){
	console.log('webapck-dev-server is live on port 9001')
})



