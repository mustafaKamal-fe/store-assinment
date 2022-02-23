const mongoose = require('mongoose');

/**
 *
 * Connects server to MongoDB service.
 */
const connectToMongoDb = () => {
	mongoose
		.connect(process.env.DB_URL)
		.then(() => {
			// Success
			console.log('Connected to Database');
		})
		.catch((e) => {
			// Failure
			console.error('Error Connecting to Database', e);
		});
};

module.exports = connectToMongoDb;
