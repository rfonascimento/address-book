import './index.scss'
export function controller(){
   return ['$scope'
      , '$state'
      , '$stateParams'
      , 'daoAddressBookService'
   , function($scope
      , $state
      , $stateParams
      , daoAddressBookService
   ){

      console.log($state, $stateParams);

   }];
}