/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute', 'ngResource', 'gp'])
	.config(function ($routeProvider, GlobalizationPipelineServiceProvider) {
		'use strict';

		var credentials = null;
		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html',
			resolve: {
				language: function(gpExample, GlobalizationPipelineService) {

					function getLanguage() {
						return gpExample.getLanguage().then(function(lang) {
							GlobalizationPipelineService.setTargetLang(lang);
							return lang;
						});
					}

					if (!credentials) {
						gpExample.getCredentials().then(function(cred) {
							credentials = cred;
							GlobalizationPipelineServiceProvider.setGpConfig({
								bundleId: 'gp-angular-example',
								credentials: credentials
							});
							return getLanguage();
						});
					} else return getLanguage();
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

	});
