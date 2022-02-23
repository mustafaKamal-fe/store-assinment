const categoryModel = require('../models/category');
const storeModel = require('../../store/models/store');

async function addOneCategory(categoryObject) {
	// add to category collection
	const category = await categoryModel.create(categoryObject);
	await category.save();
	// then add to store
	const store = await storeModel.findById(category.store);
	store.categories.push(category._id);
	await store.save();
	return category;
}

async function listStoreCategories(req) {
	const { storeID } = req.query;

	const categories = await categoryModel
		.find({ store: storeID }) // query categories under this store (storeID)
		.populate({
			path: 'store',
		})
		.lean();
	return categories;
}

async function getOneCategory(id) {
	const doc = await categoryModel.findById(id).populate('store').lean();
	return doc;
}

module.exports = {
	addOneCategory,
	listStoreCategories,
	getOneCategory,
};
