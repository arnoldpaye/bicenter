'use strict';

/**
 * @ngdoc overview
 * @name bicenterApp
 * @description
 * # bicenterApp
 *
 * Main module of the application.
 */
var bicenterApp = angular.module('bicenterApp', ['ngRoute', 'ngGrid']);

bicenterApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/partials/dashboard.html',
    controller: 'DashboardController'
  }).
  when('/products', {
    templateUrl: 'views/partials/products.html',
    controller: 'ProductController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
