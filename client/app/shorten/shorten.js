angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  
  $scope.addLink = function () {
    console.log("$scope.addLink has been called with " + $scope.link);
    Links.addLink($scope.link)
    	.then(function(){
    		$location.path('/');
    	})
    	.catch(function(err){
    		console.error(err);
    	});

  };
});