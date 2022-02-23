import Joi from 'joi';

export const categoryNameSchema = Joi.string().min(3).max(20).required();
