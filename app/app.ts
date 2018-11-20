import '../assets/css/main.scss'
// import appRoutes from './app-routes';

/*import('./pages/home').then(function(){});*/
(function(){'use strict';
   const angular = require('angularjs');
   const uirouter = require('angular-ui-router');
   const myapp = angular.module('fuzeAddressBook', ['ui.router']);

   myapp.config(['$stateProvider'
      , '$urlRouterProvider'
      , ($stateProvider
         , $urlRouterProvider
      ) => {
         var injector = angular.injector(['ng']), $q = injector.get('$q');

         var states = [
            {
               name: 'home',
               url: '/home',
               template: 'this is a test {{ persona.name }}',
               /*resolve: {
                  controller: function(){
                     var that = this;
                     var defer = $q.defer();
                     import('./pages/home').then(function(controller){
                        that.controller = controller.default(myapp);
                        defer.resolve(true);
                     });
                     return defer.promise;
                  }
               }*/
            }
         ];

         states.forEach(function(state) {
            state.resolve = state.resolve || {};
            state.resolve.controller = function(){
               return import('./pages/home').then(function(controller){
                  state.controller = controller.default(myapp)
               });
            }
            return $stateProvider.state(state.name, state);
         });


         /*
         $stateProvider
            .state('home', {
               name: 'home',
               url: '/home',
               template: 'this is a test {{ persona.name }}',
               resolve: {
                  controller: function(){
                     var that = this;
                     var defer = $q.defer();
                     import('./pages/home').then(function(controller){
                        that.controller = controller.default(myapp);
                        defer.resolve(true);
                     });
                     return defer.promise;
                  }
               }
            });
            */

         $urlRouterProvider.otherwise('home');

      }]);
   /*
   import('./pages/home').then(function(controller){
      controller(myapp);
      myapp.config(['$stateProvider'
         , '$urlRouterProvider'
         , ($stateProvider
            , $urlRouterProvider
         ) => {

            $stateProvider
               .state('home', {
                  url: '/home',
                  template: 'this is a test {{ persona.name }}',
                  controller: 'HomeCtrl'
               });

            $urlRouterProvider.otherwise('home');

         }]);
   })*/

   /*
      myapp.controller('HomeCtrl', ['$scope', function($scope){
            $scope.persona = { name: 'of a persona' };
      }]);
      */

   // appRoutes();

   // appRoutes();
})();