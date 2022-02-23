import Joi from 'joi';

export const productNameSchema = Joi.string().min(3).max(20).required();
export const productPriceSchema = Joi.number().min(0).required();
