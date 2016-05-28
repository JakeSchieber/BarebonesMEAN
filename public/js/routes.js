angular.module('routes', [])

// config the angular app
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		})
    .when('/page2', {
			templateUrl: 'views/page2.html'
		})
    .when('/404', {
			templateUrl: 'views/notFound.html'
		})
    .otherwise({ redirectTo: '/404' });
  
  $locationProvider.html5Mode(true);
  
}])
;