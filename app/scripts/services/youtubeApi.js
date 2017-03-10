var app=angular.module('byndApp', []);

app.service('youtubeApi', function ($http) {
    
    var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

    this.getVideos = function () {
        return $http.get(url);
    };

    // this.getVideoById = function (id) {
    //   return $http.get(url)
    // };

// $scope.currentPage = 0;
// $scope.pageSize = 1;
// $scope.data = [];

// $scope.numberOfPages = function() {
//     return Math.ceil($scope.data.length/$scope.pageSize);                
// };

// for (var idx=0; idx<totalResults; idx++) {
//     $scope.data.push("item "+idx);
// }

});