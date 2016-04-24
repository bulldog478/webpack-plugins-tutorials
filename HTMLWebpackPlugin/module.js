var angular = require('angular')
var htmlWebpackApp = angular.module('htmlWebpackApp',[])
angular.element(document).ready(function() {
	angular.bootstrap(document.getElementsByTagName('body'), ['htmlWebpackApp'])
})

module.exports = htmlWebpackApp