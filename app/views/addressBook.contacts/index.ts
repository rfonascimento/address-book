import './index.scss'
export function controller(){
   return ['$scope'
      , '$state'
      , '$stateParams'
      , 'daoAddressBook'
   , function($scope
      , $state
      , $stateParams
      , daoAddressBook
   ){

      console.log($state, $stateParams);

   }];
}