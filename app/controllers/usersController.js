app.controller("usersController",function ($scope, usersService){

	$scope.users=[];
	$scope.list = function(){
		console.log("Hola ");
	}
	usersService.list().then(function (r) {

        $scope.users = r.data;

    }, function (error) {
       // alert(error.data.message);
    });

});