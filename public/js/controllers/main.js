angular.module('stvController', [])

	// Inject the Stv service factory into our controller
	.controller('mainController', ['$scope','$http','Stv', function($scope, $http, Stv) {
		//
		$scope.apply_command = function(command) {
			Stv.apply_command(command)
				.success(function() {
		 	});
    	};
	}]);
