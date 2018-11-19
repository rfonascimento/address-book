(function(){'use strict';
   const angular = require('angularjs');
   const myapp = angular.module('fuzeAddressBook', []);

   myapp.controller('HomeCtrl', ['$scope', function ($scope) {
      $scope.person = { name: 'fffff' };
   }]);

})();