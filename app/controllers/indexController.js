'use strict';
app.controller('indexController', ['$rootScope', '$scope', '$location', 'authService', 'config', '$mdSidenav', function ($scope, $rootScope, $location, authService, config, $mdSidenav) {

    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    
    $scope.logOut = function () {
        authService.logOut();
        $location.path('/home');
    }

    $scope.authentication = authService.authentication;

    $scope.title = 'shell';
    $scope.busyMessage = 'Please wait ...';
    $scope.isBusy = false;
    $scope.spinnerOptions = {
        radius: 40,
        lines: 7,
        length: 0,
        width: 30,
        speed: 1.7,
        corners: 1.0,
        trail: 100,
        color: '#F58A00'
    };
    $scope.showSplash = false;

    /*
    function toggleSpinner(on) { $scope.isBusy = on; }

    $rootScope.$on('$routeChangeStart',
        function (event, next, current) {
            toggleSpinner(true);
        }
    );

    $rootScope.$on(config.events.controllerActivateSuccess,
        function (data) {
            toggleSpinner(false);
        }
    );

    $rootScope.$on(config.events.spinnerToggle,
        function (data) {
            toggleSpinner(data.show);
        }
    );
*/

}]);