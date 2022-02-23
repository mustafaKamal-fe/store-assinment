const express = require('express');
const upload = require('../../middlewares/uploadLogoFile');
const controller = require('./controllers');
const validateStoreObject = require('./middlewares/validateStore');
const uploadToCloudinary = require('../../middlewares/uploadToCloudinary');
const saveStoreToDB = require('./middlewares/saveStoreToDB');
const removeLogoFile = require('../../middlewares/removeLogoFile');

/**
 * Store Feature API router
 */
const storeRouter = express.Router();

// post new store
storeRouter.post(
	'/',
	upload.single('logo'),
	validateStoreObject,
	uploadToCloudinary,
	saveStoreToDB,
	removeLogoFile,
	controller.postStore
);

// Get store
storeRouter.get('/', controller.getStore);
module.exports = storeRouter;
