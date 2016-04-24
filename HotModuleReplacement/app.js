let angular = require('angular')

angular.module('wpApp',[])
.directive('showMessage',()=>{
	return{
		restrict:'E',
		template:require('./app.html'),
		controller:()=>{},
		link(scope, elem , attr){
			scope.showMessage = ()=>{
				alert('Hi hot-module-replacement, you are awesome112323112312!')
			}
		}
	}
})