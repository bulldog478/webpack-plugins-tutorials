var app = require('./module.js')

var htmlWebpackCtrl = function htmlWebpackCtrl($scope){
	$scope.text= "hi htmlWebpackPlugin!"
}

htmlWebpackCtrl.$inject = ['$scope']

app.controller('htmlWebpackCtrl',htmlWebpackCtrl)