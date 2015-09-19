angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

  $scope.getLinks = function () {
    Links.getLinks()
      .then(function (resp) {
        $scope.data.links = resp.data;
        // Do we maybe need to add these links as a property of
        // $scope.data? Like $scope.data.links?
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.getLinks();

});
