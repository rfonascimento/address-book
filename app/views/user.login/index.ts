import './index.scss'
export function controller(){
   return ['$scope', 'daoAddressBook', function($scope:$scope, daoAddressBook:daoAddressBook){
      const key = 'myController';
      const myscope = $scope[key] = (($scope)=>{return{
         loadInProgress: false,
         data: {}
      }})($scope);

      myscope.actionLogin = function(data){
         myscope.loadInProgress = true;
         return daoAddressBook.get(data)
            .then((response)=>{
               console.log(response);
            })
            .finally(()=>{ myscope.loadInProgress = false; })
      };

   }];
}