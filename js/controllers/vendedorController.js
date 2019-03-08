(function(){
	'use strict';
	
	angular
	.module('frontend')
	.controller('vendedorController', vendedorController);
	
	vendedorController.$inject=['clienteAPI','$scope'];
	
	function vendedorController(clienteAPI,$scope){
		$scope.cliente = [];
		
		$scope.listar = function(){
			clienteAPI.listar().success(function(data){
				$scope.vendedorController = data;
			});
		}
	}
})();