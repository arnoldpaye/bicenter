'use strict';

/**
 * @ngdoc overview
 * @name bicenterApp
 * @description
 * # bicenterApp
 *
 * Main module of the application.
 */
var bicenterApp = angular.module('bicenterApp', ['ngRoute', 'ngResource', 'ngGrid']);

bicenterApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/partials/dashboard.html',
    controller: 'DashboardController'
  }).
  when('/products', {
    templateUrl: 'views/products/list.html',
    controller: 'ProductsListController'
  }).
  when('/customers', {
    templateUrl: 'views/customers/list.html',
    controller: 'CustomersListController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
