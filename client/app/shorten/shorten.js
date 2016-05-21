angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  $scope.link = {
    url: ''
  };

  $scope.shortLink = [];

  $scope.addLink = function() {
    Links.addOne($scope.link)
      .then(function(response) {
        console.log(response.data);
        $scope.shortLink[0] = response.data;
      });
  };

  $scope.getUrl = function(url) {
    $scope.link.url = url;
    $scope.addLink();
  };

});
