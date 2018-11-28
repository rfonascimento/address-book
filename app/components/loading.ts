export default function(module: object){
   const angular = require('angularjs');
   const myapp = module || angular.module('fuzeAddressBook');

   myapp.directive('fuzeAddressBookLoadingBlocker', ['$parse', '$compile', (($parse: $parse, $compile: $compile) => {

      const fnTemplate = $compile(''+
         '<div class="fuze-address-book-loading-blocker-container" data-ng-show="loadInProgress">'+
            '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'+
         '</div>');

      return {
         compile: (tElement, tAttrs)=>{
            const fnSettings = $parse(tAttrs.fuzeAddressBookLoadingBlocker);
            return {
               post: ($scope, element, attrs, ctrls)=>{
                  const myscope = $scope.$new(true);
                  myscope.loadInProgress = fnSettings($scope);
                  fnTemplate(myscope, (clone) =>{
                     element.append(clone);
                  });

                  $scope.$on('$destroy', ()=>{
                     myscope.$detroy();
                  })

                  $scope.$watch(()=>{ return fnSettings($scope) }, (newValue) =>{
                     myscope.loadInProgress = newValue;
                  })


               }

            }
            /*
            return function postLink($scope, element, attrs, ctrls)=>{
               const myscope = $scope.$new(true);
               myscope.loadInProgress = fnSettings(myscope);
               fnTemplate(myscope, (clone) =>{
                  element.append(clone);
               })

            }*/
         }
      };

      /*
      const dao: object = {};


      const BASEURI: object = { SELF: 'http://frontend-addressbook.herokuapp.com/${$stateParams.candidate}/',
         p:null};


      dao.get = ((data: object):promise =>{
         const url = BASEURI.SELF + data.id;
         return $http.get('http://frontend-addressbook.herokuapp.com/rnascimento');
      });

      return dao;*/
   })]);
};