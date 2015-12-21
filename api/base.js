/*
 * 基本api，不要改动
 * 
*/

'use strict';

const mongo = require('../dao/mongo');
const wrap = require('../util/wrap');

let api = {};

/**
 * 列表查询
 *
 * @param {Object} request object
 * @param {Object} response object
 * @param {Object} collection name
 * @base api
 */
api.list = (req, res, collection) => {
	let condition = req.body.condition || {};
	mongo.find(collection, condition).then((doc) => {
		res.send(JSON.stringify(wrap.noPager(doc)));
	})
};

/**
 * 分页列表查询
 *
 * @param {Object} request object
 * @param {Object} response object
 * @param {Object} collection name
 * @base api
 */
api.listByPage = (req, res, collection) => {

	let query = req.query,
		condition = {},
		params = {
			limit: query.pageSize || 10,
			skip: query.pageSize * (query.pageNumber - 1) || 0
		};

	Object.keys(query).forEach((k) => {
		if(k != 'noCache' && k != 'pageSize' && k != 'pageNumber' && query[k]) {
			condition[k] = query[k];
		}
	})

	mongo.findByPage(collection, condition, params).then((doc) => {
		res.send(JSON.stringify(wrap.withPager(query, doc)));
	})
};

module.exports = api; 