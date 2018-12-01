require('bootstrap-css-only');
import appRoutes from './app-routes';
import daoServiceAddressBook from "./services/dao.address.book.service";
import authService from "./services/auth.service";
import loadingComponent from "./components/loading";
import '@fortawesome/fontawesome-free-webfonts';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import 'angularjs-toaster/toaster.css';
import '../assets/css/main.scss'; // Best for last


(function(){'use strict';
   const angular = require('angularjs');
   const uirouter = require('angular-ui-router');
   const ngCookies =require('angular-cookies');
   const uibootstrap = require('angular-ui-bootstrap');
   require('angular-animate');
   require('angularjs-toaster');

   const myapp = angular.module('fuzeAddressBook', ['ngCookies', 'ngAnimate', 'ui.router', 'ui.bootstrap', 'toaster']);

   console.log(appRoutes(), daoServiceAddressBook(), loadingComponent());

   myapp
      .config(appRoutes())
      .service('daoAddressBookService', daoServiceAddressBook())
      .service('authService', authService())
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