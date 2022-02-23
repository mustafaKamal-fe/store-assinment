const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, `Product name is required`],
		minlength: [3, `Name must be at least 5`],
		maxlength: [20, `Name is a maximum of 20 letters`],
	},
	price: {
		type: Number,
		required: [true, 'Product must have a price'],
		min: [0, 'Minimum price is zero'],
	},
	photo: {
		type: String,
		required: [true, 'Product must have a photo'],
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'category',
		required: [true, 'Product must belong to one category'],
	},
});

const priceModel = mongoose.model('product', productSchema);

module.exports = priceModel;
