/*(function(){'use strict';
   const angular = require('angularjs');
   const myapp = angular.module('fuzeAddressBook', []);

   myapp.controller('HomeCtrl', ['$scope', function ($scope) {
      $scope.person = { name: 'fffff' };
   }]);

})();*/

export default function controller(app){
   return ['$scope', function($scope){
      $scope.persona = {name: "fffffffffffffffff",id:2};

   }]
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