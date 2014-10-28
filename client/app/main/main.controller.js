'use strict';

angular.module('easyRfApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    $scope.devices = [];


    (function tick() {
		$http.get('/api/devices').success(function(devices) {
      		$scope.devices = devices;

      		if (devices.length == 1) {
      			var colorCode = '#' + devices[0].red + devices[0].green + devices[0].blue;
      			$(".coloredRectangle").css('background-color', colorCode);
      		}

      		$timeout(tick, 500);
    	});
    })();

    
  });