angular.module("MyFirstApp",[])
.controller("FirstController",function($scope,$http)


{
	//http se puede acceder mediante metodos alas pagina
	$scope.posts=[];
	$http.get("http://jsonplaceholder.typicode.com/posts")
	
	.success(function(data) //metodo success se ejecuta cuando la peticion aya regresado y sea exitosa
	{
			console.log(data);
			$scope.posts=data;
	})					

		.error(function(err)
		{

		});
		
		$http.get("http://jsonplaceholder.typicode.com/users/1")
	
	.success(function(data) //metodo success se ejecuta cuando la peticion aya regresado y sea exitosa
	{
			console.log(data);
			$scope.posts2=data;
	})					

		.error(function(err)
		{

		});

});