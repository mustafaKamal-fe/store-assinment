const express = require('express');
const upload = require('../../middlewares/uploadLogoFile');
const uploadToCloudinary = require('../../middlewares/uploadToCloudinary');
const saveCategoryToDB = require('./middlewares/saveCategoryToDB');
const validateCategoryObject = require('./middlewares/validateCategory');
const removeLogoFile = require('../../middlewares/removeLogoFile');
const controller = require('./controllers');

const categoryRouter = express.Router();

categoryRouter.post(
	'/',
	upload.single('logo'),
	validateCategoryObject,
	uploadToCloudinary,
	saveCategoryToDB,
	removeLogoFile,
	controller.postCategory
);

categoryRouter.get('/', controller.getCategory);
module.exports = categoryRouter;
