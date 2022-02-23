const util = require('util');
const fs = require('fs');
const asyncRemoveFile = util.promisify(fs.unlink);

async function removeLogoFile(req, res, next) {
	// remove logo file from ./uploads dir
	try {
		const logoFileName = `${req.body.name}-store-logo`;

		asyncRemoveFile(`./uploads/${logoFileName}`);
		next();
	} catch (error) {
		next(error);
	}
}

module.exports = removeLogoFile;
