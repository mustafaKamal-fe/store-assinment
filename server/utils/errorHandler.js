function error(err, _req, res, _next) {
	console.error(err.stack);
	res.status(500);
	res.send(error);
}

module.exports = error;
