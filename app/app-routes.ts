export default function routes() {'use strict';
   const angular = require('angularjs');
   const myapp = angular.module('fuzeAddressBook');

   myapp.config(['$stateProvider'
      , '$urlRouterProvider'
      , ($stateProvider
      , $urlRouterProvider
   ) => {

      import('./pages/home').then(function(){
            $stateProvider
               .state('home', {
                  url: '/home',
                  template: 'this is a test {{  }}',
                  controller: 'HomeCtrl'
                  /*resolve:{
                     controller: (function() {
                        return import('./pages/home')
                     })
                  }*/
               });

            $urlRouterProvider.otherwise('home');
         });

   }])

}