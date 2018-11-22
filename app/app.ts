import '../assets/css/main.scss'
import appRoutes from './app-routes';
import daoServiceAddressBook from "./services/dao.address.book";

/*import('./pages/home').then(function(){});*/
(function(){'use strict';
   const angular = require('angularjs');
   const uirouter = require('angular-ui-router');
   const uibootstrap = require('angular-ui-bootstrap');
   const uibootstrapstyles = require('bootstrap-css-only');

   const myapp = angular.module('fuzeAddressBook', ['ui.router', 'ui.bootstrap']);

   // Resolve states
   appRoutes(myapp);

   //
   daoServiceAddressBook(myapp);

})();