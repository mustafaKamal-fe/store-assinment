const ObjectId = require('mongoose').Types.ObjectId;

/**
 * Validates MongoDB ObjectId input [Thanks to stackoverflow!!]
 * @param {*} id
 * @returns
 */
function isValidObjectId(id) {
	if (ObjectId.isValid(id)) {
		if (String(new ObjectId(id)) === id) return true;
		return false;
	}
	return false;
}

module.exports = isValidObjectId;
