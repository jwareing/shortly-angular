angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.newLink = {};
  $scope.addLink = function () {
    console.log("$scope.addLink has been called with " + $scope.newLink);
    Links.addLink($scope.newLink);

  };
});