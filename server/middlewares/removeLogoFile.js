const util = require('util');
const fs = require('fs');
const asyncRemoveFile = util.promisify(fs.unlink);

/**
 * Removes images from upload dir used by multer package before saving to the cloud.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function removeLogoFile(req, res, next) {
	// remove logo file from ./uploads dir
	try {
		const logoFileName = `${req.body.name}-image`;

		asyncRemoveFile(`./uploads/${logoFileName}`);
		next();
	} catch (error) {
		next(error);
	}
}

module.exports = removeLogoFile;
