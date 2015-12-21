'use strict';

const base = require('../api/base');

let api = {};

api.list = (req, res) => {
	base.list(req, res, 'tag');
}

module.exports = api; 