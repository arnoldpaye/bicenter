'use strict';

angular.module('bicenterApp').service('CustomerService', function CustomerService($resource) {
  return $resource('http://localhost:8080/backend' + '/products.json/:id', {
  },
  {
    'save': { method: 'POST'},
    'update': { method: 'PUT'},
    'delete': { method: 'DELETE'}
  });
});