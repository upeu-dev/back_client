
var baseUrl = 'http://localhost:8000/';
var baseAlmacendUrl = 'http://localhost:8001/';




var config = {
    appErrorPrefix: '[WebF1x Error] ', //Configure the exceptionHandler decorator
    docTitle: 'WebF1 xTest: ',
    httpCacheName: 'httpCache',
    baseUrl: baseUrl,
    baseAlmacendUrl: baseAlmacendUrl,

};

var app = angular.module('app');
app.value('config', config);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);


