'use strict';

/**
 * @ngdoc overview
 * @name bicenterApp
 * @description
 * # bicenterApp
 *
 * Main module of the application.
 */
var bicenterApp = angular.module('bicenterApp', ['ngRoute']);

bicenterApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/sample', {
    templateUrl: 'views/partials/sample.html',
    controller: 'MainController'
  }).
  otherwise({
    redirectTo: '/sample'
  });
}]);
