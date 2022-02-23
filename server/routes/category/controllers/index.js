const {
	getOneCategory,
	listStoreCategories,
} = require('../utils/categoryCrud');

async function postCategory(req, res) {
	const createdCategory = req.createdCategory;
	res.status(201).json({
		message: 'success',
		category: createdCategory,
	});
}

async function getCategory(req, res) {
	let { storeID } = req.query;

	try {
		if (storeID) {
			let data = await listStoreCategories(req);
			res.status(200).json({ categories: data });
		} else {
			// Single category fetch
			const store = await getOneCategory(req.query.id);
			res.status(200).json({ store });
		}
	} catch (error) {
		res.status(500).send({
			message: 'failure',
			error,
		});
	}
}
const controller = {
	postCategory,
	getCategory,
};

module.exports = controller;
