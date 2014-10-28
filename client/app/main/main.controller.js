'use strict';

angular.module('easyRfApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    $scope.device = {};

    (function tick() {
		$http.get('/api/devices').success(function(devices) {
      		if (devices.length == 1) {
      			delete devices[0].id;
      			$scope.device = devices[0];      			
      			var colorCode = '#' + $scope.device.red + $scope.device.green + $scope.device.blue;
      			$(".coloredRectangle").css('background-color', colorCode);
      		}

      		$timeout(tick, 500);
    	});
    })();


    $scope.toggleLed = function() {
    	console.log("toggle LED");
    	$scope.ledState = !$scope.ledState;
    	$http.post('api/devices/1/led', {ledState: $scope.ledState}).success(function(response){
    		console.log(response);
    	});
    }

    
  });