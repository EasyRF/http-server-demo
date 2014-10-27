'use strict';

var express = require('express');
var controller = require('./device.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/:deviceId', controller.saveSeriesData);

module.exports = router;