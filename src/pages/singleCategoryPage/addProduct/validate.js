import {
	productNameSchema,
	productPriceSchema,
} from '../../../validation/productValidation';

function validateProductName(name) {
	return productNameSchema.validate(name);
}

function validateProductPrice(price) {
	return productPriceSchema.validate(price);
}

const validate = {
	validateProductName,
	validateProductPrice,
};

export default validate;
