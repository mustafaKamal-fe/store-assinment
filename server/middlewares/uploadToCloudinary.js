const cloudinary = require('cloudinary').v2;
async function uploadToCloudinary(req, _res, next) {
	try {
		const data = {
			image: req.file.path,
		};

		// Upload image to Cloudinary via SDK
		const result = await cloudinary.uploader.upload(data.image);
		req.imgUrl = result.secure_url;
		next();
	} catch (error) {
		next(error);
	}
}

module.exports = uploadToCloudinary;
