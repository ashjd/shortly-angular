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
        console.log(response.data);
        $scope.shortLink[0] = response.data;
      });
  };

  $scope.getUrl = function(url) {
    $scope.link.url = url;
    $scope.addLink();
  };

});
