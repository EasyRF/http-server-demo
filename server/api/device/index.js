'use strict';

var express = require('express');
var controller = require('./device.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/:deviceId', controller.saveSeriesData);
router.post('/:deviceId/led', controller.saveLedState);

module.exports = router;