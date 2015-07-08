

angular.module('AngularRouting', ['ngRoute'])
	.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/pagina1', {
				controller: 'page1Controller',
				templateUrl: './view/page1.html',
			})
			.when('/pagina2', {
				controller: 'page2Controller',
				templateUrl: './view/page2.html'
			})
			.when('/pagina3', {
				controller: 'page3Controller',
				templateUrl: './view/page3.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}])
	.controller('page1Controller', function($scope){
		
		
		$scope.nome = "Fabrizio";
		
	});
	
	