(function(){
	'use strict';
	
	angular
	.module('fontend')
	.factory('clienteAPI',clienteAPI);
	
	clienteAPI.$inject = ['$http'];
	
	function clienteAPI($http){
		var _listar  = function(){
			return $http.get('http://localhost:8080/cliente/');
		};
		
		return{
			listar:_listar
		}
	}
})()