import Joi from 'joi';

export const storeNameSchema = Joi.string().min(3).max(20).required();
export const storeDescriptionSchema = Joi.string().min(0).max(200);
