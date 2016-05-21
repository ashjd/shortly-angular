angular.module('shortly.links', [])

.controller('LinksController', function (Auth, $scope, $location, Links) {
  // Your code here
  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

  $scope.data = {
    links: [],
  };

  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });
});
