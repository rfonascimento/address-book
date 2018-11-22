export default function(module: object){
   module.factory('daoAddressBook', ['$http', (($http: $http):object => {
      const dao = {};

      dao.get = ((data: object):promise =>{

      });

      return dao;
   })]);
};