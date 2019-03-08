(function(){
	'use strict';
	
	angular
	.module('frontend')
	
	.config(interceptorPush);
	
	interceptorPush.$inject = ['$httpProvider'];
	
	function interceptorPush($httpProvider){
		$httpProvider.interceptors.push('authInterceptor');
	}
})()