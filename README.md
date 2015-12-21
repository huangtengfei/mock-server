
## 说明

一个简单的 Mock Server，基于 Node.JS

## 运行

1. npm install
2. node server.js

## 使用

在 api 文件夹下以 Collection 划分每个表的 CRUD API ，需引入 base

举个栗子（分页查询 disk ）

```javascript
'use strict';

const base = require('../api/base');

let api = {};

api.listByPage = (req, res) => {
    base.listByPage(req, res, 'disk');
}

module.exports = api; 
```

