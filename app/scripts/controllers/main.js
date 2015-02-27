'use strict';

/**
 * @ngdoc function
 * @name bicenterApp.controller:DashboardController
 * @description
 * # DashboardController
 * Controller of the bicenterApp
 */
angular.module('bicenterApp').controller('DashboardController', [function() {

}]);

/**
 * @ngdoc function
 * @name bicenterApp.controller:ProductController
 * @description
 * # ProductController
 * Controller of the bicenterApp
 */
angular.module('bicenterApp').controller('ProductsListController', ['$scope', function($scope) {
  $scope.myData = [
    {code: '001', name: 'Product 1', shortDescription: 'Short description for Product 1', price: '10.50'},
    {code: '002', name: 'Product 2', shortDescription: 'Short description for Product 2', price: '100.30'},
    {code: '003', name: 'Product 3', shortDescription: 'Short description for Product 3', price: '9.00'}
  ];
  $scope.gridProducts = { data: 'myData' };
}]);

/**
 * @ngdoc function
 * @name bicenterApp.controller:CustomersListController
 * @description
 * # CustomersListController
 * Controller of the bicenterApp
 */
angular.module('bicenterApp').controller('CustomersListController', [function() {

}]);