'use strict';

angular.module('expenseWatch')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      });
  });
