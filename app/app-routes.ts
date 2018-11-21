
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
               views: {
                  'header': {
                     template: require('./views/header/header.html'),
                     controller: require('./views/header/header').controller()
                  },
                  'main':{
                     template: require('./views/home/home.html'),
                     controller: require('./views/home/home').controller()
                  },
                  'footer':{
                     template: require('./views/footer/footer.html'),
                     controller: require('./views/footer/footer').controller()
                  }
               },
            });

         $urlRouterProvider.otherwise('home');


   }])

}