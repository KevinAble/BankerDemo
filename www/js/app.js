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
  .state('app.transactions', {
      url: "/transactions/:accountid",
      views: {
          'menuContent': {
              templateUrl: "templates/transactions.html",
              controller: 'TransactionCtrl'
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

    .state('app.transferComplete', {
        url: "/transferComplete",
        views: {
            'menuContent': {
                templateUrl: "templates/transferComplete.html"
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
})

.directive('fancySelect',
    [
        '$ionicModal',
        function ($ionicModal) {
            return {
                /* Only use as <fancy-select> tag */
                restrict: 'E',

                /* Our template */
                templateUrl: 'templates/fancy-select.html',

                /* Attributes to set */
                scope: {
                    'items': '=', /* Items list is mandatory */
                    'text': '=', /* Displayed text is mandatory */
                    'value': '=', /* Selected value binding is mandatory */
                    'callback': '&'
                },

                link: function (scope, element, attrs) {

                    /* Default values */
                    scope.multiSelect = attrs.multiSelect === 'true' ? true : false;
                    scope.allowEmpty = attrs.allowEmpty === 'false' ? false : true;

                    /* Header used in ion-header-bar */
                    scope.headerText = attrs.headerText || '';

                    /* Text displayed on label */
                    // scope.text          = attrs.text || '';
                    scope.defaultText = scope.text || '';

                    /* Notes in the right side of the label */
                    scope.noteText = attrs.noteText || '';
                    scope.noteImg = attrs.noteImg || '';
                    scope.noteImgClass = attrs.noteImgClass || '';

                    /* Optionnal callback function */
                    // scope.callback = attrs.callback || null;

                    /* Instanciate ionic modal view and set params */

                    /* Some additionnal notes here : 
                     * 
                     * In previous version of the directive,
                     * we were using attrs.parentSelector
                     * to open the modal box within a selector. 
                     * 
                     * This is handy in particular when opening
                     * the "fancy select" from the right pane of
                     * a side view. 
                     * 
                     * But the problem is that I had to edit ionic.bundle.js
                     * and the modal component each time ionic team
                     * make an update of the FW.
                     * 
                     * Also, seems that animations do not work 
                     * anymore.
                     * 
                     */
                    $ionicModal.fromTemplateUrl(
                        'fancy-select-items.html',
                          { 'scope': scope }
                    ).then(function (modal) {
                        scope.modal = modal;
                    });

                    /* Validate selection from header bar */
                    scope.validate = function (event) {
                        // Construct selected values and selected text
                        if (scope.multiSelect == true) {

                            // Clear values
                            scope.value = '';
                            scope.text = '';

                            // Loop on items
                            jQuery.each(scope.items, function (index, item) {
                                if (item.checked) {
                                    scope.value = scope.value + item.id + ';';
                                    scope.text = scope.text + item.text + ', ';
                                }
                            });

                            // Remove trailing comma
                            scope.value = scope.value.substr(0, scope.value.length - 1);
                            scope.text = scope.text.substr(0, scope.text.length - 2);
                        }

                        // Select first value if not nullable
                        if (typeof scope.value == 'undefined' || scope.value == '' || scope.value == null) {
                            if (scope.allowEmpty == false) {
                                scope.value = scope.items[0].id;
                                scope.text = scope.items[0].text;

                                // Check for multi select
                                scope.items[0].checked = true;
                            } else {
                                scope.text = scope.defaultText;
                            }
                        }

                        // Hide modal
                        scope.hideItems();

                        // Execute callback function
                        if (typeof scope.callback == 'function') {
                            scope.callback(scope.value);
                        }
                    }

                    /* Show list */
                    scope.showItems = function (event) {
                        event.preventDefault();
                        scope.modal.show();
                    }

                    /* Hide list */
                    scope.hideItems = function () {
                        scope.modal.hide();
                    }

                    /* Destroy modal */
                    scope.$on('$destroy', function () {
                        scope.modal.remove();
                    });

                    /* Validate single with data */
                    scope.validateSingle = function (item) {

                        // Set selected text
                        scope.text = item.text;

                        // Set selected value
                        scope.value = item.id;

                        // Hide items
                        scope.hideItems();

                        // Execute callback function
                        if (typeof scope.callback == 'function') {
                            scope.callback(scope.value);
                        }
                    }
                }
            };
        }
    ]
);
