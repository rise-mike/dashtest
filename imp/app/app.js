var TestApp = angular.module("TestApp", ['ngRoute', 'ngAnimate'])

TestApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: './views/home.html',
            controller: 'TestController'
        })
        .when('/contact', {
            templateUrl: './views/contact.html'
        })
        .otherwise({
            redirectTo: './home'
        })
}])

TestApp.controller('TestController', ['$scope', '$http', function($scope, $http) {
    

}])

