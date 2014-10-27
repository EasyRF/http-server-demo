'use strict';

var express = require('express');
var controller = require('./sensor.controller');

var router = express.Router();

router.get('/', controller.index);

router.post('/:id/color', controller.saveColor);

module.exports = router;