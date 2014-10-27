'use strict';

var _ = require('lodash');

// Get list of sensors
exports.index = function(req, res) {
  res.json([]);
};

exports.saveColor = function(req, res) {
	console.log(JSON.stringify(req.body));
	res.send("color saved");
}