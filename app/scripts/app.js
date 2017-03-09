'use strict';

/**
 * @ngdoc overview
 * @name byndApp
 * @description
 * # byndApp
 *
 * Main module of the application.
 */
angular
  .module('byndApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
