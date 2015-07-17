var app=angular.module("app",[
	'ngRoute', 
    'LocalStorageModule',
	]);

app.config(function ($routeProvider) {
	$routeProvider.when("/test", {
        templateUrl: "./app/views/test.html"
    });
    $routeProvider.when("/users", {
        templateUrl: "./app/views/users.html"
    });
    $routeProvider.when("/home", {
        templateUrl: "./app/views/home.html"
    });
    $routeProvider.otherwise({ redirectTo: "/home" });
});


app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);