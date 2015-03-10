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
    };


    $scope.tasks = [
      { title: 'Collect coins test' },
      { title: 'Eat mushrooms' },
      { title: 'Get high enough to grab the flag' },
      { title: 'Find the Princess' }
    ];

    $scope.accounts = [
      { accountId: 1, owner: 'Bauer Leasing Inc', accountNumber: '**61500', accountDescription: 'CIH SPRAYER'},
      { accountId: 2, owner: 'Bauer Leasing Inc', accountNumber: '**77301', accountDescription: '3320 SPRAYER' },
      { accountId: 3, owner: 'D & K Larsen Farms Inc', accountNumber: '**36399', accountDescription: 'Svc Acct' },
      { accountId: 4, owner: 'D & K Larsen Farms Inc', accountNumber: '**67200', accountDescription: 'Operating' },
      { accountId: 5, owner: 'D & K Larsen Farms Inc', accountNumber: '**30103', accountDescription: '07 Cat Trctr' },
      { accountId: 6, owner: 'D & K Larsen Farms Inc', accountNumber: '**80501', accountDescription: '8360 Tractor' },
      { accountId: 7, owner: 'Dane M Larsen', accountNumber: '**11699', accountDescription: 'Svc Acct' },
      { accountId: 8, owner: 'Dane M Larsen', accountNumber: '**28101', accountDescription: 'Bin & Tile' },
      { accountId: 9, owner: 'Dane M Larsen', accountNumber: '**25501', accountDescription: 'S 5-139-50' }
    ];

    $scope.transfer = {
        fromAccountId: 0,
        toAccountId: 0,
        amount: 0,
        comment: null
    };



})

.controller('TransactionCtrl', function ($scope,$stateParams, $ionicModal, $timeout) {
    console.log("$stateParams", $stateParams);
    var vm = this;
    vm.accountid = $stateParams.accountid;
    $scope.tranactions = [
        { account: "**126xx", date: "01/09/2014", description: "LOAN DISBURE", amount: "16,423.00" },
        { account: "**126xx", date: "01/07/2014 ", description: "LOAN DISBURSE", amount: "321.39" },
        { account: "**126xx", date: "01/06/2014 ", description: "INTEREST ACCRUAL", amount: "14.91" },
        { account: "**126xx", date: "01/02/2014 ", description: "PRIN PMT", amount: "19,200.00" },
        { account: "**126xx", date: "12/30/2013 ", description: "LOAN DISBURSE", amount: "121.19" },
        { account: "**126xx", date: "12/30/2013 ", description: "LOAN DISBURSE", amount: "2,300.00" },
        { account: "**126xx", date: "12/27/2013 ", description: "LOAN DISBURSE", amount: "13,431.26" },
        { account: "**126xx", date: "12/27/2013 ", description: "INTEREST ACCRUAL", amount: "155.34" },
        { account: "**126xx", date: "12/26/2013 ", description: "LOAN DISBURSE", amount: "927.33" }
    ];

    vm.tranactions = $scope.tranactions;
    console.log("vm", vm);

});


