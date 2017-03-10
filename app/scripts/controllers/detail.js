'use strict';

/**
 * @ngdoc function
 * @name byndApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the byndApp
 */

angular.module('byndApp')
  .controller('DetailCtrl', function($http, $scope) {
      
      console.log(response);
      var i = 0;
      var payload = response.data;

      var totalResults = payload.pageInfo.totalResults;
      var resultsPerPage = payload.pageInfo.resultsPerPage;

      $scope.currentPage = 0;
      $scope.pageSize = 1;
      $scope.data = [];

      $scope.numberOfPages = function() {
          return Math.ceil($scope.data.length/$scope.pageSize);                
      }

      for (var idx=0; idx<totalResults; idx++) {
          $scope.data.push("item "+idx);
      }


      $scope.videoItems = payload.items;
      $scope.title = payload.items.title;
      $scope.description = payload.items.description;


    // }).then(function error(response) { 
    //   console.log(response);
    //   $scope.errorResponse = response.statusText;
    // });

}).filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
