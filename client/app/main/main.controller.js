'use strict';

angular.module('easyRfApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/devices').success(function(devices) {
      $scope.devices = devices;
    });

  });