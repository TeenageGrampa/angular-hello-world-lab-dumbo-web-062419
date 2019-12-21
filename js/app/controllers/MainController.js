function MainController($scope) {
	$scope.name = 'Dan Voigt';
	$scope.email = 'danvoigt@email.com';
	$scope.phone = '01234567890';
}

angular
	.module('app')
	.controller('MainController', MainController);