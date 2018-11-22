/*(function(){'use strict';
   const angular = require('angularjs');
   const myapp = angular.module('fuzeAddressBook', []);

   myapp.controller('HomeCtrl', ['$scope', function ($scope) {
      $scope.person = { name: 'fffff' };
   }]);

})();*/
import serviceDaoAddressBook from "";

export function controller(app){
   serviceDaoAddressBook(app)
   /*app.controller('HomeCtrl', ['$scope', function($scope){
      $scope.persona = {name: "fffffffffffffffff",id:2};
   }]);*/
   /*return function($scope){
      $scope.persona = {name: "fffffffffffffffff",id:2};
   }*/
   return ['$scope', 'daoAddressBook', function($scope, daoAddressBook){
      $scope.persona = {name: "fffffffffffffffff",id:2};
   }];
   /*
   app.controller('HomeCtrl', ['$scope', function($scope){
      $scope.persona = {name: "fffffffffffffffff",id:2};
   }]);*/
}/*{
   return [$scope, function($scope){
      $scope.person = { id: 222 };
   }];/*
   const angular = require('angularjs');
   const myapp = angular.module('fuzeAddressBook', []);

   myapp.controller('HomeCtrl', ['$scope', function ($scope) {
      $scope.person = { name: 'fffff' };
   }]);*/
//};