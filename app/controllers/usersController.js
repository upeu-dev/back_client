app.controller("usersController",function ($scope, usersService){

	$scope.users=[];
	
	list = function(){
		usersService.list().then(function (r) {
			$scope.users = r.data
		}, function (error) {
			alert(error.data.message);
		});
	}
	
	list();
	$scope.save = function(){
		usersService.create($scope.user).then(function (r) {
			console.log(r.data);
			list();
		}, function (error) {
			alert(error.data.message);
		});

		console.log("Hola ");
	}

});