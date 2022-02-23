const productModel = require('../models/product');
const categoryModel = require('../../category/models/category');

async function addOneProduct(productObject) {
	// add to products collection
	const product = await productModel.create(productObject);
	await product.save();
	// then add to category
	const category = await categoryModel.findById(productObject.category);
	category.products.push(product._id);
	await category.save();
	return product;
}

async function listCategoryProducts(categoryID) {
	const products = await categoryModel
		.findById(categoryID)
		.populate('products')
		.select('products')
		.lean();

	return products;
}

module.exports = {
	addOneProduct,
	listCategoryProducts,
};
