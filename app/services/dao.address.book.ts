export default function(module: object){
   const angular = require('angularjs');
   const myapp = module || angular.module('fuzeAddressBook');

   myapp.factory('daoAddressBook', ['$http', (($http: $http):object => {
      const dao = {};

      dao.get = ((data: object):promise =>{

      });

      return dao;
   })]);
};