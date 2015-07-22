
var baseUrl = 'http://localhost:8000/';
var baseAlmacendUrl = 'http://localhost:8001/';


var client_id = 'kAxiRZZ1egTqMVupq0Q4WCB0w0xZwl9D9qWGu3oc';
var client_secret = 'j9T6cGHwOeA4GKOGLahXHXNjZnkbE4qJ3wJTZ8xI0nhHqKV9nmLcdF2sX9Nt2iT6rq8s682g18E5S2FmNIbeIlX93JdlPt0RBHs54O5Lcn0tvj2Ba6Vd3e3cZhixZK2v';
var grant_type= 'password';

var config = {
    appErrorPrefix: '[WebF1x Error] ', //Configure the exceptionHandler decorator
    docTitle: 'WebF1 xTest: ',
    httpCacheName: 'httpCache',
    baseUrl: baseUrl,
    baseAlmacendUrl: baseAlmacendUrl,
    
    client_id: client_id,
    client_secret: client_secret,
    grant_type: grant_type,

};

var app = angular.module('app');
app.value('config', config);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);


app.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    allowHtml: false,
    autoDismiss: false,
    closeButton: false,
    closeHtml: '<button>&times;</button>',
    containerId: 'toast-container',
    extendedTimeOut: 1000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },
    maxOpened: 0,    
    messageClass: 'toast-message',
    newestOnTop: true,
    onHidden: null,
    onShown: null,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    progressBar: true,
    tapToDismiss: true,
    target: 'body',
    templates: {
      toast: 'directives/toast/toast.html',
      progressbar: 'directives/progressbar/progressbar.html'
    },
    timeOut: 0,
    titleClass: 'toast-title',
    toastClass: 'toast'
  });
});
//extendedTimeOut: 1000,
//timeOut: 5000,