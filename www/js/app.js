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
				gpReady: function(gpExample) {
					if (!credentials) {
						return gpExample.getCredentials().then(function(cred) {
							credentials = cred;
							GlobalizationPipelineServiceProvider.setGpConfig({
								bundleId: 'gp-angular-example',
								credentials: credentials
							});
							return true;
						});
					} else return true;
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
