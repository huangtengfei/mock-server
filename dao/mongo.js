/*
 * 数据库api，不要改动
 * 
*/

'use strict';

const q = require('q');
const db = require('monk')('localhost/sncp');

let mongo = {};

/**
 * find
 *
 * @param {String} the name of a collection
 * @param {Object} query condition
 * @param {Object} query params (skip, limit)
 * @return {Promise}
 * @mongo api
 */
mongo.find = (collection, condition) => {
	let defer = q.defer();
	let model = db.get(collection);
	model.find(condition, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})
	return defer.promise;
}

/**
 * findByPage
 *
 * @param {String} the name of a collection
 * @param {Object} query condition
 * @param {Object} query params (skip, limit)
 * @return {Promise}
 * @mongo api
 */
mongo.findByPage = (collection, condition, params) => {
	let defer = q.defer();
	let model = db.get(collection);
	model.count(condition, (error, count) => {
		if(error) {
			defer.reject(error);
		}
		model.find(condition, params, (err, doc) => {
			if(err) {
				defer.reject(err);
			}
			let result = {			
				count: count,
				data: doc
			}
			defer.resolve(result);
		})
	})
	return defer.promise;
}

/**
 * findById
 *
 * @param {String} the name of a collection
 * @param {String} id(ObjectId)
 * @return {Promise}
 * @mongo api
 */
mongo.findById = (collection, id) => {
	let defer = q.defer();
	let model = db.get(collection);
	model.findById(id, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})
	return defer.promise;
};

/**
 * insert
 *
 * @param {String} the name of a collection
 * @param {Object} the data to be inserted
 * @return {Promise}
 * @mongo api
 */
mongo.insert = (collection, data) => {
	let defer = q.defer();
	let model = db.get(collection);
	model.insert(data, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

};

/**
 * update
 *
 * @param {String} the name of a collection
 * @param {String} query condition
 * @return {Promise}
 * @mongo api
 */
mongo.update = (collection, condition, data) => {

	let defer = q.defer();
	
	users.update(condition, data, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	});

	return defer.promise;
};

/**
 * updateById
 *
 * @param {String} the name of a collection
 * @param {String} id(ObjectId)
 * @return {Promise}
 * @mongo api
 */
mongo.updateById = (collection, id, data) => {

	let defer = q.defer();
	
	users.updateById(id, data, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	});

	return defer.promise;
};

/**
 * remove
 *
 * @param {String} the name of a collection
 * @param {Object} query condition
 * @return {Promise}
 * @mongo api
 */
mongo.remove = (collection, condition) => {

	let defer = q.defer();
	
	users.remove(condition,(err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	});

	return defer.promise;
};

module.exports = mongo;