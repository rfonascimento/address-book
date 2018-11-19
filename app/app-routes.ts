export default function routes() {'use strict';
   const angular = require('angularjs');
   const myapp = angular.module('fuzeAddressBook', ['ui.router']);

   myapp.config(['$stateProvider'
         , '$urlRouterProvider'
      , ($stateProvider
         , $urlRouterProvider
      ) => {

         $stateProvider
            .state('home', {
               url: '/home',
               template: 'this is a test',
               controller: 'HomeCtrl'
            });

         $urlRouterProvider.otherwise('home');
   }])
}