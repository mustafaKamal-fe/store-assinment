const Joi = require('joi');

const storeSchema = Joi.object({
	name: Joi.string().min(3).max(20).required(),
	description: Joi.string().min(0).max(200),
});

module.exports = storeSchema;
