/**
 * Custom error handler that does absolutely nothing intersting.
 * @param {*} err
 * @param {*} _req
 * @param {*} res
 * @param {*} _next
 */
function error(err, _req, res, _next) {
	console.error(err.stack);
	res.status(500);
	res.send(error);
}

module.exports = error;
