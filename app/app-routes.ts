
export default function routes() {'use strict';
   const angular = require('angularjs');
   const myapp = angular.module('fuzeAddressBook');

   myapp.config(['$stateProvider'
      , '$urlRouterProvider'
      , ($stateProvider
      , $urlRouterProvider
   ) => {

         $stateProvider
            .state('root', {
               url: '/root/{candidate}',
               redirectTo: 'root.user.login',
               views: {
                  'header': {
                     template: require('./views/header/header.html'),
                     controller: require('./views/header/header').controller()
                  },
                  'main@':{
                     template: require('./views/home/home.html'),
                     controller: require('./views/home/home').controller()
                  },
                  'footer':{
                     template: require('./views/footer/footer.html'),
                     controller: require('./views/footer/footer').controller()
                  }
               }
            })
            .state('root.user', {
               abstract: true,
               redirectTo: 'root.user.login'
            })
            .state('root.user.login', {
               url: '/login',
               views: {
                  'main@':{
                     template: require('./views/user.login/index.html'),
                     controller: require('./views/user.login/index').controller()
                  },
               }
            })
            .state('root.user.register', {
               url: '/register',
               views: {
                  'main@':{
                     template: require('./views/user.register/index.html'),
                     controller: require('./views/user.register/index').controller()
                  },
               }
            });

         $urlRouterProvider.otherwise('root');


   }])

}