import './index.scss'
export function controller(){
   return ['$scope'
      , '$q'
      , '$state'
      , '$stateParams'
      , 'daoGroupsService'
      , 'daoContactsService'
      , 'modalAddressBookServiceConfig'
      , 'toaster'
   , function($scope
      , $q
      , $state
      , $stateParams
      , daoGroupsService
      , daoContactsService
      , modalAddressBookServiceConfig
      , toaster
   ){
      const key = 'myController';
      const zpriv = {};
      const myscope = $scope[key] = (($scope)=>{return{
         loadInProgress: false
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
                  myscope.data = response.data;
               }else{
                  toaster.error("Error", "It was not possible retrieve contact list at this point. Please try again");
               }
            })
      };

      myscope.actionCreateContact = ():promise=>{
         return modalAddressBookServiceConfig()
            .then((response:object)=>{
               console.log(response);
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