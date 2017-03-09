'use strict';

/**
 * @ngdoc function
 * @name byndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the byndApp
 */
angular.module('byndApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
