
'use strict';

const disk = require('../api/disk');
const tag = require('../api/tag');

function routes(app) {

	app.get('/disk/listDisk', disk.listByPage);
	app.get('/disk/listTag', tag.list);

}

module.exports = routes;