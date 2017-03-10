'use strict';

/**
 * @ngdoc function
 * @name byndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the byndApp
 */

angular.module('byndApp')
  .controller('MainCtrl', function($scope, $http, $location) {
    
    $scope.apiCall = function () {
      $http({
        method : 'GET',
        url : 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=38&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'
        }).then(function success(response) {
          
          // console.log(response);

          var payload = response.data;
          var totalResults = payload.pageInfo.totalResults;
          var resultsPerPage = payload.pageInfo.resultsPerPage;

          $scope.videoItems = payload.items;
          $scope.title = payload.items.title;
          $scope.description = payload.items.description;

        }).then(function error(response) { 
          
          // console.log(response);

        });
      };

    $scope.apiCallById = function(id, index) {
      $location.path('/detail/'+index+'/embedKey-'+id);
    };

    
    $scope.apiCall();

});

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
