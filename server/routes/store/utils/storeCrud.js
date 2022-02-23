const storeModel = require('../models/store');

async function addOneStore(data) {
	const { name, description, logo } = data;
	const doc = await storeModel.create({ name, description, logo });
	await doc.save();
	return doc;
}

async function getOneStore(id) {
	const doc = await storeModel.findById(id).lean();
	return doc;
}

async function paginateStores(req) {
	const { page = 1, limit = 10 } = req.query;
	const stores = await storeModel
		.find()
		.limit(limit * 1)
		.skip((page - 1) * limit)
		.lean();
	const count = await storeModel.countDocuments();

	return { stores, totalPages: Math.ceil(count / limit), currentPage: page };
}
module.exports = {
	addOneStore,
	getOneStore,
	paginateStores,
};
