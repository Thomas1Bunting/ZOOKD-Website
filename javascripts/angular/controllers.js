/* App Controllers */


// Declare app level module which depends on filters, and services
angular.module('ZOOKD', ['ZOOKD.filters', 'ZOOKD.services', 'ZOOKD.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {template: 'partials/home.html', controller: MainCtrl});
    $routeProvider.when('/about', {template: 'partials/what-we-do.html', controller: MainCtrl});
    $routeProvider.when('/cats', {template: 'partials/cats.html', controller: MainCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);


 function MainCtrl() {
  }


		
