export default function daoAddressBook(){
   return ['$http'
      , '$parse'
      , '$stateParams'
      , 'localStorageService'
   , (($http: $http
      , $parse
      , $stateParams: $stateParams
      , localStorageService: localStorageService
   ):object => {
      const dao: object = {};
      const zpriv: object = {};

      zpriv.getUrl = function(type: string, data: object){
         switch(type){
            case 'self':         { return `http://frontend-addressbook.herokuapp.com/` } break;
            case 'addressBook':  { return `http://frontend-addressbook.herokuapp.com/${data.id}/` } break;
            default: return null;
         }
      };

      dao.get = ((data: object):promise =>{
         const candidate;
         const url = zpriv.getUrl('addressBook', data);
         return $http.get(url).then((response)=>{
            localStorageService.setObject('fuzeAddressBookCandidateData', $parse('data.value')(response));
            return { success: true, data: ((response || {}).data || {}).value };
         }).catch((error)=>{
            if ( angular.isObject(candidate = localStorageService.getObject('fuzeAddressBookCandidateData')) ){
               return { success: true, data: candidate }
            }else{
               return { success: false, error: error };
            }
         });
      });

      return dao;
   })];
};