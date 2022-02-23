const { addOneCategory } = require('../utils/categoryCrud');

const saveCategoryToDB = async (req, _res, next) => {
	try {
		// prepare category object
		const categoryObject = {
			name: req.body.name,
			logo: req.imgUrl,
			store: req.body.store,
		};

		// save category to DB
		const createdCategory = await addOneCategory(categoryObject);

		req.createdCategory = createdCategory;

		next();
	} catch (error) {
		next(error);
	}
};

module.exports = saveCategoryToDB;
