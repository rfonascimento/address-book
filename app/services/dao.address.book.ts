export default function(module: object){
   const angular = require('angularjs');
   const myapp = module || angular.module('fuzeAddressBook');

   myapp.factory('daoAddressBook', ['$http', '$stateParams', (($http: $http, $stateParams: $stateParams):object => {
      const dao: object = {};


      const BASEURI: object = { SELF: 'http://frontend-addressbook.herokuapp.com/${$stateParams.candidate}/',
      p:null};


      dao.get = ((data: object):promise =>{
         const url = BASEURI.SELF + data.id;
         return $http.get('http://frontend-addressbook.herokuapp.com/rnascimento');
      });

      return dao;
   })]);
};