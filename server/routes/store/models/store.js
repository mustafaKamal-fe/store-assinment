const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, `Store name is required`],
		minlength: [3, `Name must be at least 5`],
		maxlength: [20, `Name is a maximum of 20 letters`],
	},
	description: String,
	logo: String,
});

const storeModel = mongoose.model('store', storeSchema);

module.exports = storeModel;
