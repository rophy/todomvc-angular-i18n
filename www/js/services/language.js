/*global angular */

/**
 * Services that persists and retrieves todos from localStorage or a backend API
 * if available.
 *
 * They both follow the same API, returning promises for all changes to the
 * model.
 */
angular.module('todomvc')
	.factory('getLanguage', function ($http) {
		'use strict';
		return $http.get('/language')
			.then(function (res) {
				return res.data;
			});
	});