import '../assets/css/main.scss'
import appRoutes from './app-routes';
import daoServiceAddressBook from "./services/dao.address.book";
import loadingComponent from "./components/loading";

(function(){'use strict';
   const angular = require('angularjs');
   const uirouter = require('angular-ui-router');
   const uibootstrap = require('angular-ui-bootstrap');
   const uibootstrapstyles = require('bootstrap-css-only');
   require('angular-animate');

   const myapp = angular.module('fuzeAddressBook', ['ngAnimate', 'ui.router', 'ui.bootstrap']);

   console.log(appRoutes(), daoServiceAddressBook(), loadingComponent());

   myapp
      .config(appRoutes())
      .service('daoAddressBook', daoServiceAddressBook())
      .directive('fuzeAddressBookLoadingBlocker', loadingComponent());



   myapp.controller('mainCtrl', ['$rootScope', '$scope', '$state', ($rootScope: $rootScope, $scope:$scope, $state:$state) =>{
      const key = 'myController';
      const myscope = $scope[key] = (($scope)=>{return{
         loadInProgress: false,
         data: {}
      }})($scope);

      $rootScope.$on('$stateChangeError',
         function(event, toState, toParams, fromState, fromParams, error){
            console.log(error);
         })

   }]);

})();