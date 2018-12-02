import './index.scss'
export function controller(){
   return ['$scope'
      , '$q'
      , '$state'
      , '$stateParams'
      , 'daoGroupsService'
      , 'daoContactsService'
      , 'modalAddressBookServiceConfig'
      , 'modalAddressBookServiceDelete'
      , 'toaster'
   , function($scope
      , $q
      , $state
      , $stateParams
      , daoGroupsService
      , daoContactsService
      , modalAddressBookServiceConfig
      , modalAddressBookServiceDelete
      , toaster
   ){
      const key = 'myController';
      const zpriv = {};
      const myscope = $scope[key] = (($scope)=>{return{
         loadInProgress: false,
         data: []
      }})($scope);

      (()=>{
         myscope.loadInProgress = true;
         $q.resolve(null)
            .then(()=>{ return myscope.actionGetData()})
            .finally(()=>{ myscope.loadInProgress = false; })
      })();

      myscope.actionGetData = ()=>{
         return daoContactsService.getExtended(zpriv.getContext())
            .then((response)=>{
               if (response.success == true){
                  myscope.data = response.data.map((contact)=>{
                     if ( !angular.isString(contact.pictureUrl) || contact.pictureUrl.lenght == 0 ){
                        contact.pictureUrl = 'https://sprucegrovelandscaping.com/wp-content/uploads/2016/04/Photo-Not-Available.jpg';
                     }
                     return contact;
                  });
               }else{
                  toaster.error("Error", "It was not possible retrieve contact list at this point. Please try again");
               }
            })
      };

      myscope.actionConfigContact = (data:object):promise=>{
         const contact;
         return modalAddressBookServiceConfig(data)
            .then((response:object)=>{
               contact = myscope.data.reduce((output, contact)=>{
                     if ( contact && contact.name == response.name ){
                        return contact;
                     }
                  }
                  , null);

               if ( angular.isObject(contact) ){
                  angular.extend(contact, response);
               }else{
                  myscope.data.push(response);
               }
            });
      };

      myscope.actionDeleteContact = (data:object):promise=>{
         return modalAddressBookServiceDelete(data)
            .then((response:object)=>{
               myscope.data.map((contact, index)=>{
                  if ( contact.name == response.name ){
                     myscope.data.splice(index, 1);
                  }
               });
            });
      };

      zpriv.getContext = ()=>{
         return {
            candidate: $stateParams.candidate,
            addressBookId: $stateParams.addressBookId
         }
      };
   }];
}