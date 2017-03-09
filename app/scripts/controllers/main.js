'use strict';

/**
 * @ngdoc function
 * @name byndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the byndApp
 */

angular.module('byndApp')
  .controller('MainCtrl', function($scope, $http) {
    $http({
      method : "GET",
      url : "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw"
    }).then(function success(response) {
      
      console.log(response);

      // var i = 0;
      // var el_itemDescription = $('#description-wrapper');
      // var els__itemDescriptions = [];
      // var video_items_array_size = [];
     // ============================================================================ //

      // note alias: YT => youtube
      // var YT_videoItems= response.data.items;
      
      // // $scope.playlist = response.data.items;
      // $scope.videoId = response.data.contentDetails.videoId;     

      // $scope.title = YT_videoItems.title;
      // $scope.description = YT_videoItems.description;

      // $.each($el_itemDescription, function (key,val) {
      //   console.log(key,val);
        // console.log(video_item_description_char_length);
        // videoItemDescriptions.push()
      // });

      // for (i=0; i < videoItemDescriptions.length - 1; i++) {
      //   videoItemDescriptions[i]
      // }
      // if (n%20 == 0 && n > 0) {
      //   $('#description-wrapper').append('<br>');
      // }

    }).then(function error(response) { 
      console.log(response);
      // $scope.errorResponse = response.statusText;
    });
});
