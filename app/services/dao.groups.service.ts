export default function daoGroups(){
   return ['$http', '$stateParams', '$parse', (($http: $http, $stateParams: $stateParams, $parse:$parse):object => {
      const dao: object = {};
      const zpriv: object = {};

      zpriv.getUrl = function(context: object, data: object){

         if ( data && data.id ){
            return `http://frontend-addressbook.herokuapp.com/${context.candidate}/${context.addressBookId}/groups/${data.id}`
         }
         else{
            return `http://frontend-addressbook.herokuapp.com/${context.candidate}/${context.addressBookId}/groups/`
         }

      };

      zpriv.rest2gui = (data:object)=>{

      };

      dao.get = ((context: object, data: object):promise =>{
         const url = zpriv.getUrl(context, data);
         return $http.get(url).then((response)=>{
            return { success: true, data: ((response || {}).data || {}).value };
         }).catch((error)=>{ return { success: false, error: error }; });
      });

      // Apparently there's no GET to the resource per se
      dao.getExtended = (context:object)=>{
         const url = `http://frontend-addressbook.herokuapp.com/${context.candidate}/${context.addressBookId}`;
         return $http.get(url).then((response)=>{
            return { success: true, data: $parse('data.value.groups')(response) };
         }).catch((error)=>{ return { success: false, error: error }; });
      };

      dao.create = ((context: object, data: object):promise =>{
         const url = zpriv.getUrl(context, data);
         return $http.post(url, data).then((response)=>{
            return { success: true, data: ((response || {}).data || {}).value };
         }).catch((error)=>{ return { success: false, error: error }; });
      });

      dao.config = ((context: object, data: object):promise =>{
         const url = zpriv.getUrl(context, data);
         return $http.put(url, data).then((response)=>{
            return { success: true, data: ((response || {}).data || {}).value };
         }).catch((error)=>{ return { success: false, error: error }; });
      });

      dao.remove = ((context: object, data: object):promise =>{
         const url = zpriv.getUrl(context, data);
         return $http.delete(url, data).then((response)=>{
            return { success: true, data: ((response || {}).data || {}).value };
         }).catch((error)=>{ return { success: false, error: error }; });
      });

      return dao;
   })];
};