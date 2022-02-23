const storeSchema = require('../utils/validation');

/**
 * Validate store object before saving.
 * @param {*} req
 * @param {*} _res
 * @param {*} next
 */
async function validateStoreObject(req, _res, next) {
	const { name, description } = req.body;
	const store = { name, description };
	try {
		await storeSchema.validateAsync(store);
		next();
	} catch (e) {
		console.log(e);
		next(e);
	}
}

module.exports = validateStoreObject;
