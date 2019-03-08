(function(){
	'use strict';
	
	angular
	.module('frontend')
	.controller('clienteController', clienteController);
	
	clienteController.$inject=['clienteAPI','$scope'];
	
	function clienteController(clienteAPI,$scope){
		$scope.cliente = [];
		
		$scope.listar = function(){
			clienteAPI.listar().success(function(data){
				$scope.cliente = data;
			});
		}
	}
})();