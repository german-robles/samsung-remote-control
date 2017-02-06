angular.module('stvService', [])
	//  Simple factory
	// each function returns a promise object
	.factory('Stv', ['$http',function($http) {
		return {
			apply_command : function(command) {
				return $http.put('/api/stv/' + command);
			},
			apply_channel_command : function(command) {
				return $http.put('/api/stv/number/' + command);
			},
		}
	}]
);
