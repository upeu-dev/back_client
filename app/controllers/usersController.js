app.controller("usersController",function ($scope,  usersService){

	$scope.users=[];
	
	list = function(){
		usersService.list().then(function (r) {
			$scope.users = r.data
		}, function (error) {
			alert(error.data.message);
		});
	}

	list();
	$scope.select = function(d){
		$scope.user = d;
	};
	$scope.save = function(){
		if($scope.user.id){
			usersService.update({ id: "" },$scope.user).then(function (r) {
				console.log(r.data);
				list();
			}, function (error) {
				alert(error.data.message);
			});
		}else{
			usersService.create($scope.user).then(function (r) {
				console.log(r.data);
				list();
			}, function (error) {
				alert(error.data.message);
			});
		}
	};
	$scope.delete = function(d){

		usersService.delete({ id: d.id }).then(function (r) {
			console.log(r.data);
			list();
		}, function (error) {
			alert(error.data.message);
		});

	};

});