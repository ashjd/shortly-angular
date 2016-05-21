angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  $scope.link = {
    url: ''
  };

  $scope.addLink = function() {
    Links.addOne($scope.link);
    console.log($scope.link);
  };

  $scope.getUrl = function(url) {
    $scope.link.url = url;
    $scope.addLink();
  };




});
