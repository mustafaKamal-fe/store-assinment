const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, `Category name is required`],
		minlength: [3, `Name must be at least 5`],
		maxlength: [20, `Name is a maximum of 20 letters`],
	},
	logo: {
		type: String,
		required: [true, 'Category must have a logo'],
	},
	store: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'store',
		required: [true, 'Category must belong to one store'],
	},
	products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
});

const categoryModel = mongoose.model('category', categorySchema);

module.exports = categoryModel;
