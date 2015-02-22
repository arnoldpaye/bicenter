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
angular.module('bicenterApp').controller('ProductController', ['$scope', '$http', function($scope, $http) {
  $scope.myData = [{name: "Moroni", age: 50},
    {name: "Tiancum", age: 43},
    {name: "Jacob", age: 27},
    {name: "Nephi", age: 29},
    {name: "Enos", age: 34}];
  $scope.gridOptions = { data: 'myData' };
}]);