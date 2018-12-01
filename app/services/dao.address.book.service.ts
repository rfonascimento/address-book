export default function daoAddressBook(){
   return ['$http', '$stateParams', (($http: $http, $stateParams: $stateParams):object => {
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
         const url = zpriv.getUrl('addressBook', data);
         return $http.get(url).then((response)=>{
            return { success: true, data: ((response || {}).data || {}).value };
         }).catch((error)=>{ return { success: false, error: error }; });
      });

      return dao;
   })];
};