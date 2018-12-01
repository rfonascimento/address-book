import './index.scss'
export function controller(){
   return ['$scope', '$state', '$stateParams', 'daoAddressBook', function($scope:$scope, $state: $state, $stateParams: $stateParams, daoAddressBook:daoAddressBook){
      const key = 'myController';
      const myscope = $scope[key] = (($scope)=>{return{
         loadInProgress: false,
         data: {
            id: $stateParams.candidate
         }
      }})($scope);

      myscope.actionLogin = function(data){
         const addressBook = null;
         myscope.loadInProgress = true;
         return daoAddressBook.get(data)
            .then((response)=>{
            if ( response && response.success && angular.isArray(response.data)){
               addressBook = response.data.reduce((output, addressBook)=>{
                  if ( angular.isObject(output) ){ return output; }
                  else if ( addressBook.username == myscope.data.username && addressBook.password == myscope.data.password ){ return addressBook; }
                  else { return null; }
               }, null);
               if ( !angular.isObject(addressBook) ){
                  // Error
               }else{
                  $state.go('root.addressBook', {addressBook: addressBook.id});
               }
            }
            })
            .catch((error)=>{

            })
            .finally(()=>{ myscope.loadInProgress = false; })
      };

   }];
}