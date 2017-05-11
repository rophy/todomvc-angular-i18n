/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute', 'ngResource', 'gp'])
	.config(function ($routeProvider, GlobalizationPipelineServiceProvider) {
		'use strict';

		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html',
			resolve: {
				language: function(getLanguage, GlobalizationPipelineService) {
					return getLanguage.then(function(lang) {
						GlobalizationPipelineService.setTargetLang(lang);
						return lang;
					});
				},
				store: function (todoStorage) {
					
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
		
		GlobalizationPipelineServiceProvider.setGpConfig({
			bundleId: 'gp-angular-example',
			credentials: {
				// "url": "URL",
				// "userId": "USERID",
				// "password": "PASSWORD",
				// "instanceId": "INSTANCEID"
			}
		});
	});
