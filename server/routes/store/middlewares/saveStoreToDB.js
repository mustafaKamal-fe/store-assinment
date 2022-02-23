const { addOneStore } = require('../utils/storeCrud');

async function saveStoreToDB(req, _res, next) {
	try {
		// prepare store object
		const storeObject = {
			name: req.body.name,
			description: req.body.description,
			logo: req.imgUrl,
		};

		// save to store to MongoDB
		const createdStore = await addOneStore(storeObject);

		req.createdStore = createdStore;

		next();
	} catch (error) {
		next(error);
	}
}

module.exports = saveStoreToDB;
