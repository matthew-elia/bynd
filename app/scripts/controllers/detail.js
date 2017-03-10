'use strict';

/**
 * @ngdoc function
 * @name byndApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the byndApp
 */

angular.module('byndApp')
  .controller('DetailCtrl', function($http, $scope, $location) {

      var currentPath = $location.path();
      var embedKey = currentPath.slice(-11);
      var itemId = currentPath.split('/')[2];
      console.log(itemId);

      $scope.getVideoId = function () {
        var videoItemUrl = 'http://youtube.com/embed/'+embedKey+'';
        $('#videoItemYTiFrame').attr('src', videoItemUrl);
      }

      $scope.getVideoId();

      // var payload = response.data;
      // var totalResults = payload.pageInfo.totalResults;
      // var resultsPerPage = payload.pageInfo.resultsPerPage;
      
      // $scope.videoItems = payload.items;
      // $scope.title = payload.items.title;
      // $scope.description = payload.items.description;


      $scope.currentPage = 0;
      $scope.pageSize = 1;
      $scope.data = [];
      
      $scope.numberOfPages = function() {
          return Math.ceil($scope.data.length/$scope.pageSize);                
      }
      for (var idx=0; idx<totalResults; idx++) {
          $scope.data.push("item "+idx);
      }


});
