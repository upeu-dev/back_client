app.factory("usersService",function($http){
	var url="http://localhost:8000/configs/users/";
	return {
		"list": function () {
			return $http.get(url).then(function (r){
				return r;
			});
		},
		"create":"no guarda"
	};
});