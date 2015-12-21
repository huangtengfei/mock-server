'use strict';

const base = require('../api/base');

let api = {};

api.listByPage = (req, res) => {
	base.listByPage(req, res, 'disk');
}

module.exports = api; 