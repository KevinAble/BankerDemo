// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('demobanking', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.main', {
    url: "/main",
    views: {
      'menuContent': {
        templateUrl: "templates/main.html"
      }
    }
  })

  .state('app.alert', {
      url: "/alert",
    views: {
      'menuContent': {
          templateUrl: "templates/alert.html"
      }
    }
  })
    .state('app.transfer', {
        url: "/transfer",
      views: {
        'menuContent': {
            templateUrl: "templates/transfer.html"
        }
      }
    })

  .state('app.approval', {
      url: "/approval",
    views: {
      'menuContent': {
          templateUrl: "templates/approval.html"
      }
    }
  })

  .state('app.deposit', {
      url: "/deposit",
      views: {
          'menuContent': {
              templateUrl: "templates/deposit.html"
          }
      }
  })

      .state('app.contact', {
          url: "/contact",
          views: {
              'menuContent': {
                  templateUrl: "templates/contact.html"
              }
          }
      });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
