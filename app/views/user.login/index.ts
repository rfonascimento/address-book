import './index.scss'
export function controller(){
   return ['$scope', 'daoAddressBook', function($scope, daoAddressBook){
      const key = 'myController';
      const myscope = $scope[key] = (($scope)=>{return{
         loadInProgress: false,
         data: {}
      }})($scope);

      myscope.actionLogin = function(data){
         return daoAddressBook.get(data)
            .then((response)=>{
               console.log(response);
            })
      };

   }];
}