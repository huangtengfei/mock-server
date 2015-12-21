/*
 * 对数据库的返回结果进行封装
 * 目前只对正确结果做了处理
*/

'use strict';

let util = {};

util.withPager = (params, doc) => {
	return {
		errCode: '0',
		errMsg: 'success',
		data: {
			pageNumber: params.pageNumber,
			pageSize: params.pageSize,
			pageTotal: Math.ceil(doc.count/params.pageSize),
			totalDataCnt: doc.count,
			datas: doc.data
		}
	}
};

util.noPager = (doc) => {
	return {
		errCode: '0',
		errMsg: 'success',
		data: doc
	}
};

module.exports = util;