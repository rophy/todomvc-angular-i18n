/*global angular */

/**
 * Services that persists and retrieves todos from localStorage or a backend API
 * if available.
 *
 * They both follow the same API, returning promises for all changes to the
 * model.
 */
angular.module('todomvc')
.factory('gpExample', function ($http, $q) {
	'use strict';
	
	
	var langs = null;
	var deferred = $q.defer();
	var gpExample = {
		getCredentials: function() {
			return $http.get('/credentials')
			.then(function(res) {
				return res.data;
			});
		},
		getTranslations: function() {
			if (!langs) {
				$http.get('/translations')
				.then(function (res) {
					langs = res.data;
					deferred.resolve(langs);
				});
			}
			return deferred.promise;
		}
	};
	return gpExample;
});
