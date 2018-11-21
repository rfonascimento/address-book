import '../assets/css/main.scss'
import appRoutes from './app-routes';

/*import('./pages/home').then(function(){});*/
(function(){'use strict';
   const angular = require('angularjs');
   const uirouter = require('angular-ui-router');
   const uibootstrap = require('angular-ui-bootstrap');

   const myapp = angular.module('fuzeAddressBook', ['ui.router', 'ui.bootstrap']);

   appRoutes(myapp);

})();