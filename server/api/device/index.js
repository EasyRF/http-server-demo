'use strict';

var express = require('express');
var controller = require('./device.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/:deviceId/series/:seriesId', controller.saveSeriesData);

module.exports = router;