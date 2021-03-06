'use strict';

var _ = require('lodash');

// The one and only list of devices
var devices = [];
var ledState = 1;

function getOrCreateDevice(id) {
	var device = _.find(devices, function(d) { return d.id === id});
	if (!device) {
		console.log("device " + id + " not found, creating new device");
		device = { id: id };
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
  	console.log("received " + JSON.stringify(req.body) + " for device " + req.params.deviceId);

  	var device = getOrCreateDevice(req.params.deviceId);

  	_.extend(device, req.body);

  	res.send('ledState:' + ledState);
}

exports.saveLedState = function(req, res) {
	console.log('led state: ' + JSON.stringify(req.body) + ' for device ' + req.params.deviceId);
	if (req.body.ledState) {
		ledState = 1;
	} else {
		ledState = 0;
	}
	res.send("led state saved");
}