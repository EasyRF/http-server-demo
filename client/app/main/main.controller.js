'use strict';

angular.module('easyRfApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    $scope.devices = [];
    $scope.selectedDevice = null;

    function getOrCreateDevice(id) {
      var device = _.find($scope.devices, function(d) { return d.id === id});
      if (!device) {
        console.log("device " + id + " not found, creating new device");
        device = { id: id, ledState: false };
        $scope.devices.push(device);
      }
      return device;
    };

    function drawNetwork() {
      $scope.graph = new Springy.Graph();
      $('#network').springy({ graph: $scope.graph });

      function drawDevice(device) {
        var deviceNode = $scope.graph.newNode({label: device.id});
        if (angular.isDefined(device.p) && device.p != null) {
          var parentDevice = getOrCreateDevice(device.p);
          if (parentDevice) {
            var parentNode = drawDevice(parent);
            $scope.graph.newEdge(deviceNode, parentNode);
          }    
        };
        return deviceNode;
      }

      if ($scope.selectedDevice) {
        drawDevice($scope.selectedDevice);  
      }
    };

    $scope.$watch('selectedDevice', function(newValue, oldValue) {
      if (angular.isDefined(newValue) && angular.isDefined($scope.selectedDevice) && newValue !== oldValue) {
        drawNetwork();
      }
    });

    $scope.toggleLed = function() {
      if ($scope.selectedDevice == null) return;

    	console.log('toggle LED for device ' + $scope.selectedDevice.id);
    	$scope.selectedDevice.ledState = !$scope.selectedDevice.ledState;
    	$http.post('api/devices/' + $scope.selectedDevice.id + '/led', {ledState: $scope.selectedDevice.ledState}).success(function(response){
    		console.log(response);
    	});
    };

    (function tick() {
      $http.get('/api/devices').success(function(devices) {

        var wasEmpty = $scope.devices.length == 0;

        _.forEach(devices, function(d) { 
          var device = getOrCreateDevice(d.id);
          _.extend(device, d);
        });

        if (wasEmpty) {
          $scope.selectedDevice = $scope.devices[0];
        }

            // var colorCode = '#' + $scope.device.red + $scope.device.green + $scope.device.blue;
            // $(".coloredRectangle").css('background-color', colorCode);
        $timeout(tick, 1000);
      });
    })();    

  });