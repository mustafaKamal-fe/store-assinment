import {
	storeNameSchema,
	storeDescriptionSchema,
} from '../../validation/storeValidation';

function validateStoreName(name) {
	return storeNameSchema.validate(name);
}

function validateStoreDescription(name) {
	return storeDescriptionSchema.validate(name);
}

const validate = {
	validateStoreName,
	validateStoreDescription,
};

export default validate;
