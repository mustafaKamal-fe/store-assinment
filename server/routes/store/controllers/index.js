const { getOneStore, paginateStores } = require('../utils/storeCrud');

async function getStore(req, res) {
	let { page, limit } = req.query;

	// With pagination
	if (page && limit) {
		try {
			let data = await paginateStores(req);
			res.status(200).json({ pagination: data });
		} catch (error) {
			res.status(500).send({
				message: 'failure',
				error,
			});
		}
	} else {
		// Single store fetch
		try {
			const store = await getOneStore(req.query.id);
			res.status(200).json({ store });
		} catch (error) {
			res.status(500).send({
				message: 'failure',
				error,
			});
		}
	}
}
async function postStore(req, res) {
	// Finish
	const createdStore = req.createdStore;
	res.status(201).json({
		message: 'success',
		store: createdStore,
	});
}
const storeControlers = {
	getStore,
	postStore,
};

module.exports = storeControlers;
