const { addOneProduct } = require('../utils/productCrud');

const saveCategoryToDB = async (req, _res, next) => {
	try {
		// prepare product object
		const productObject = {
			name: req.body.name,
			photo: req.imgUrl,
			price: req.body.price,
			category: req.body.category,
		};

		// save category to DB
		const createdProduct = await addOneProduct(productObject);

		req.createdProduct = createdProduct;

		next();
	} catch (error) {
		next(error);
	}
};

module.exports = saveCategoryToDB;
