
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

const routes = require('./route/routes');

app.engine('.html', ejs.__express);
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static('.'));

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	if ('OPTIONS' == req.method){
		res.status(200);
	}
	next();
});

app.listen(8000, () => {
	console.log('node server started at port 8000...');
})

routes(app);