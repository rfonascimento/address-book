
export default function appRoutes() {
   return ['$stateProvider'
      , '$urlRouterProvider'
      , ($stateProvider
         , $urlRouterProvider
      ) => {

         $stateProvider
            .state('root', {
               url: '/root/{candidate}',
               redirectTo: 'root.user.login',
               views: {
                  'header': {
                     template: require('./views/header/header.html'),
                     controller: require('./views/header/header').controller()
                  },
                  'main@':{
                     template: require('./views/home/home.html'),
                     controller: require('./views/home/home').controller()
                  },
                  'footer':{
                     template: require('./views/footer/footer.html'),
                     controller: require('./views/footer/footer').controller()
                  }
               }
            })
            .state('root.user', {
               abstract: true,
               redirectTo: 'root.user.login'
            })
            .state('root.user.login', {
               url: '/login',
               views: {
                  'main@':{
                     template: require('./views/user.login/index.html'),
                     controller: require('./views/user.login/index').controller()
                  },
               }
            })
            .state('root.user.register', {
               url: '/register',
               views: {
                  'main@':{
                     template: require('./views/user.register/index.html'),
                     controller: require('./views/user.register/index').controller()
                  },
               }
            })
            .state('root.addressBook', {
               url: '/{addressBook}',
               views:{
                  'main@':{
                     template: '<nav data-ui-view="nav"></nav><aside data-ui-view="main-content" class="main-container"></aside>'
                  },
               },
               redirectTo: 'root.addressBook.contacts',
            })
            .state('root.addressBook.contacts', {
               url: '/contacts',
               views: {
                  'nav'{
                     template: require('./views/partials/navigation/navigation.html'),
                     controller: require('./views/partials/navigation/navigation').controller()
                  },
                  'main-content':{
                     template: require('./views/addressBook.contacts/index.html'),
                     controller: require('./views/addressBook.contacts/index').controller()
                  },
               }
            });

         $urlRouterProvider.otherwise('root');


      }];
}