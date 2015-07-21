var app=angular.module("app",[
	'ngRoute', 
    'ngMaterial',
    'toastr',
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
    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "./app/views/login.html"
    });

    $routeProvider.when("/notauthorized", {
        controller: "notauthorizedController",
        templateUrl: "./app/views/notauthorized.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});


