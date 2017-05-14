/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute', 'ngResource', 'pascalprecht.translate'])
	.config(function ($translateProvider) {
		$translateProvider
		.translations('en-US', {
		  "title":"todos",
		  "new_item_tooltip": "What needs to be done?",
		  "clear_completed": "Clear completed",
		  "edit_help": "Double-click to edit a todo",
		  "mark_complete": "Mark all as complete",
		  "active": "Active",
		  "all": "All",
		  "completed": "Completed",
		  "items_left": "{{remainingCount}} item(s) left"
		})
		.preferredLanguage('en-US');
	})
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html',
			resolve: {
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
