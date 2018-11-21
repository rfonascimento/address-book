import '../assets/css/main.scss'
import appRoutes from './app-routes';
import homeCtrl from './pages/home/home';

/*import('./pages/home').then(function(){});*/
(function(){'use strict';
   const angular = require('angularjs');
   const uirouter = require('angular-ui-router');
   const myapp = angular.module('fuzeAddressBook', ['ui.router']);

   homeCtrl(myapp);
   appRoutes(myapp);

})();