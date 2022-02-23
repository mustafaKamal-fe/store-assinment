const productSchema = require('../utils/validation');
const isValidObjectID = require('../../../utils/validateObjectID');
/**
 * Validate product object before saving.
 * @param {*} req
 * @param {*} _res
 * @param {*} next
 */
async function validateProductObject(req, _res, next) {
	const { name, price, category } = req.body;
	try {
		await productSchema.validateAsync({ name, price });
		if (isValidObjectID(category)) {
			next();
		} else {
			throw new Error('Invalid category reference!!');
		}
	} catch (e) {
		console.log(e);
		next(e);
	}
}

module.exports = validateProductObject;
