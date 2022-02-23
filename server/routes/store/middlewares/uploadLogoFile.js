const multer = require('multer');

// Create storage
const storage = multer.diskStorage({
	destination: (_req, _file, cb) => {
		cb(null, 'uploads');
	},
	filename: (req, _file, cb) => {
		const logoFileName = `${req.body.name}-store-logo`;
		cb(null, logoFileName);
	},
});

// Filter logo files types to JPEG and PNG only
const fileFilter = (_req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb({ message: 'Unsupported file format' }, false);
	}
};

// Configure multer
const upload = multer({
	storage: storage,
	limits: { fileSize: 1024 * 1024 }, // Maximum of 1MB
	fileFilter,
});

module.exports = upload;
