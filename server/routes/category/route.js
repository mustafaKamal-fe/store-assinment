const express = require('express');
const upload = require('../../middlewares/uploadLogoFile');
const uploadToCloudinary = require('../../middlewares/uploadToCloudinary');
const saveCategoryToDB = require('./middlewares/saveCategoryToDB');
const validateCategoryObject = require('./middlewares/validateCategory');
const removeLogoFile = require('../../middlewares/removeLogoFile');
const controller = require('./controllers');

/**
 * Category API feature router
 */
const categoryRouter = express.Router();

// Post new Category
categoryRouter.post(
	'/',
	upload.single('logo'),
	validateCategoryObject,
	uploadToCloudinary,
	saveCategoryToDB,
	removeLogoFile,
	controller.postCategory
);
// Fetch category
categoryRouter.get('/', controller.getCategory);
module.exports = categoryRouter;
