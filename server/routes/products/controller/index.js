const { listCategoryProducts } = require('../utils/productCrud');

const postProduct = (req, res) => {
	const createdProduct = req.createdProduct;
	res.status(201).json({
		message: 'success',
		product: createdProduct,
	});
};

const getProduct = async (req, res) => {
	const categoryID = req.query.categoryID;

	try {
		if (categoryID) {
			let data = await listCategoryProducts(categoryID);
			res.status(200).json({ items: data.products });
		} else {
			res.status(401).end();
		}
	} catch (error) {
		res.status(500).send({
			message: 'failure',
			error,
		});
	}
};

const controller = {
	postProduct,
	getProduct,
};

module.exports = controller;
