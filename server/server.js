require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const appErrorHandler = require('./utils/errorHandler');
const storeRouter = require('./routes/store/route');
const connectToMongoDb = require('./utils/connectDB');

// server setup
const app = express();
const port = 3001;
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
connectToMongoDb();

// Image uploads to cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUD,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
});

// Routes
app.use('/api/store', storeRouter);

// App error handler
app.use(appErrorHandler);

// Kick-off server
app.listen(port, () =>
	console.log(`Store-Assignment APP is listening on port ${port}!`)
);
