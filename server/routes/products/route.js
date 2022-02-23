const express = require('express');
const upload = require('../../middlewares/uploadLogoFile');
const uploadToCloudinary = require('../../middlewares/uploadToCloudinary');
const saveProductToDB = require('./middlewares/saveProductToDB');
const validateProductObject = require('./middlewares/validateProduct');
const removeLogoFile = require('../../middlewares/removeLogoFile');
const controller = require('./controller');

/**
 * Product API feature router
 */
const productRouter = express.Router();

// post new product
productRouter.post(
	'/',
	upload.single('photo'),
	validateProductObject,
	uploadToCloudinary,
	saveProductToDB,
	removeLogoFile,
	controller.postProduct
);
// Get products
productRouter.get('/', controller.getProduct);
module.exports = productRouter;
