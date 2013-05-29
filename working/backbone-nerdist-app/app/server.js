/**
 *  Simple API Server to take Nerdist Feed XML and Parse to JSON to avoid CORS error.
 *  Author: Kevin Coughlin
 *
 */

var restify = require('restify');

var server = restify.createServer({
	name: 'nerdistapp',
	version: '0.0.1'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
	res.send(req.params);
	return next();
});

server.listen(8080, function () {
	console.log('%s listening at %s', server.name, server.url);
});