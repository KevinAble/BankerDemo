angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };

    // Create the AccountSelector Modal Dialog
    $ionicModal.fromTemplateUrl('templates/accountselector.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.accountSelector = modal;
    });

    // Triggered in the accountSelector modal to close it
    $scope.closeAccountSelector = function () {
        $scope.accountSelector.hide();
        $scope.$apply();
    };

    $scope.accounts = [
      { accountId: 1, owner: 'Bauer Leasing Inc', accountNumber: '**61500', accountDescription: 'CIH SPRAYER', balance: 1234.56},
      { accountId: 2, owner: 'Bauer Leasing Inc', accountNumber: '**77301', accountDescription: '3320 SPRAYER', balance: 543.21},
      { accountId: 3, owner: 'D & K Larsen Farms Inc', accountNumber: '**36399', accountDescription: 'Svc Acct', balance: 987.56 },
      { accountId: 4, owner: 'D & K Larsen Farms Inc', accountNumber: '**67200', accountDescription: 'Operating', balance: 567.89 },
      { accountId: 5, owner: 'D & K Larsen Farms Inc', accountNumber: '**30103', accountDescription: '07 Cat Trctr', balance: 9876.54 },
      { accountId: 6, owner: 'D & K Larsen Farms Inc', accountNumber: '**80501', accountDescription: '8360 Tractor', balance: 20000.00 },
      { accountId: 7, owner: 'Dane M Larsen', accountNumber: '**11699', accountDescription: 'Svc Acct', balance: 2000.00 },
      { accountId: 8, owner: 'Dane M Larsen', accountNumber: '**28101', accountDescription: 'Bin & Tile', balance: 0.00 },
      { accountId: 9, owner: 'Dane M Larsen', accountNumber: '**25501', accountDescription: 'S 5-139-50', balance: 0.00 }
    ];

    $scope.transfer = {
        fromAccountId: 1,
        toAccountId: 1,
        amount: 100,
        comment: null
    };

    $scope.fromAccount = function () {
        var x = _.find($scope.accounts, { accountId: '1' });
        console.log(x);
        return 'this is a test';
    };
})

