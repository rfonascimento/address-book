
export default function routes() {'use strict';
   const angular = require('angularjs');
   const myapp = angular.module('fuzeAddressBook');

   // require('./pages/home/home');

   myapp.config(['$stateProvider'
      , '$urlRouterProvider'
      , ($stateProvider
      , $urlRouterProvider
   ) => {

         $stateProvider
            .state('home', {
               url: '/home',
               template: require('./pages/home/home.html'),
               controller: require('./pages/home/home').default()
            });

         $urlRouterProvider.otherwise('home');


   }])

}