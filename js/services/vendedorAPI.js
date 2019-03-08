(function(){
	'use strict';
	
	angular
	.module('fontend')
	.factory('vendedorAPI',vendedorAPI);
	
	vendedorAPI.$inject = ['$http'];
	
	function vendedorAPI($http){
		var _listar  = function(){
			return $http.get('http://localhost:8080/vendedor/');
		};
		
		return{
			listar:_listar
		}
	}
})()