'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/competitors', {templateUrl: 'partials/competitors.html', controller: MyCtrl1});
    $routeProvider.when('/events', {templateUrl: 'partials/events.html', controller: MyCtrl2});
    $routeProvider.when('/prefectures', {templateUrl: 'partials/prefectures.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/competitors'});
  }]);
