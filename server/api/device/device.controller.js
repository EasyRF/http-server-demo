'use strict';

var _ = require('lodash');

// The one and only list of devices
var devices = [];


function getOrCreateDevice(id) {
	var device = _.find(devices, function(d) { return d.id === id});
	if (!device) {
		console.log("device " + id + " not found, creating new device");
		device = { id: id, series: [] };
		devices.push(device);
	}
	return device;
}

// Get list of devices
exports.index = function(req, res) {
  res.json(devices);
};

// Save series data for device
exports.saveSeriesData = function(req, res) {
  	console.log("received " + JSON.stringify(req.body) + " for series " + req.params.seriesId + " for device " + req.params.deviceId);

  	var device = getOrCreateDevice(req.params.deviceId);

  	device.series[req.params.seriesId] = req.body;
  	
  	res.send("saved");
}
