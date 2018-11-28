import '../assets/css/main.scss'
import appRoutes from './app-routes';
import daoServiceAddressBook from "./services/dao.address.book";
import loadingComponent from "./components/loading";

/*import('./pages/home').then(function(){});*/
(function(){'use strict';
   const angular = require('angularjs');
   const uirouter = require('angular-ui-router');
   const uibootstrap = require('angular-ui-bootstrap');
   const uibootstrapstyles = require('bootstrap-css-only');
   require('angular-animate');

   const myapp = angular.module('fuzeAddressBook', ['ngAnimate', 'ui.router', 'ui.bootstrap']);

   // Resolve states
   appRoutes(myapp);

   //
   daoServiceAddressBook(myapp);

   loadingComponent();


   myapp.controller('mainCtrl', ['$scope', '$state', ($scope:$scope, $state:$state) =>{
      const key = 'myController';
      const myscope = $scope[key] = (($scope)=>{return{
         loadInProgress: false,
         data: {}
      }})($scope);

      $scope.isStateLogin = () => {
         console.log($state);
      }

   }]);

})();