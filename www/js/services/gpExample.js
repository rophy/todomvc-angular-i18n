/*global angular */

/**
 * Services that persists and retrieves todos from localStorage or a backend API
 * if available.
 *
 * They both follow the same API, returning promises for all changes to the
 * model.
 */
angular.module('todomvc')
.factory('gpExample', function ($http) {
	'use strict';

	var gpExample = {
		getCredentials: function() {
			return $http.get('/credentials')
			.then(function(res) {
				return res.data;
			});
		},
		getLanguage: function() {
			return $http.get('/language')
			.then(function (res) {
				return res.data;
			});
		}
	};
	return gpExample;
});
