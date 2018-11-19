import appRoutes from './app-routes';
/*import('./pages/home').then(function(){});*/
(function(){'use strict';
   const angular = require('angularjs');
   const uirouter = require('angular-ui-router');
   const myapp = angular.module('fuzeAddressBook', ['ui.router']);
   appRoutes();

   myapp.controller('appCtrl', ['$scope', function ($scope) {
      $scope.person = { name: 'rickboy' };
   }]);

})();