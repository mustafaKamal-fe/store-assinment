const categorySchema = require('../utils/validation');
const isValidObjectID = require('../../../utils/validateObjectID');
/**
 * Validate category object before saving.
 * @param {*} req
 * @param {*} _res
 * @param {*} next
 */
async function validateCategoryObject(req, _res, next) {
	const { name, store } = req.body;
	try {
		await categorySchema.validateAsync({ name });
		if (isValidObjectID(store)) {
			next();
		} else {
			throw new Error('Invalid store reference!!');
		}
	} catch (e) {
		console.log(e);
		next(e);
	}
}

module.exports = validateCategoryObject;
