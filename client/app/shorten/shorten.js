angular.module('shortly.shorten', [])

.controller('ShortenController', function (Auth, $scope, $location, Links) {
  // Your code here

  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

  $scope.link = {
    url: ''
  };

  $scope.shortLink = [];

  $scope.addLink = function() {
    Links.addOne($scope.link)
      .then(function(response) {
        $scope.shortLink[0] = response.data;
      });
  };

  $scope.getUrl = function(url, isValid, callback) {
    if (isValid) {
      $scope.link.url = url;
      callback();
    }
  };
});
