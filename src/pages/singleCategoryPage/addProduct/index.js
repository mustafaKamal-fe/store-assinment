import React, { useRef, useState } from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, CircularProgress, Typography } from '@mui/material';
import validate from './validate';
import { addCategoryStyles } from './styles';
import CustomAlert from '../../../components/CustomAlert';
import { useAddProductMutation } from '../../../features/api/apiSlice';

function AddProduct({ category }) {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [photo, setPhoto] = useState(null);
	const [error, setError] = useState({
		name: { error: false, message: '' },
		price: { error: false, message: '' },
	});
	const fileUploader = useRef(null);
	const [addNewProduct, { isError, isSuccess, isLoading }] =
		useAddProductMutation();

	// Reset fileds
	const resetInputs = () => {
		setName('');
		setPrice(0);
	};
	// Reset errors on inputs
	const resetErrorAlert = (fieldName) => {
		setError({ ...error, [fieldName]: { error: false, message: '' } });
	};

	// Attach errors for inputs
	const attachErrorAlert = (errorAlert, event) => {
		const fieldName = event.target.name;
		setError({
			...error,
			[fieldName]: { error: true, message: errorAlert.message },
		});
	};

	// product name input handler
	const handleProductName = (e) => {
		const name = e.target.value;
		let { error } = validate.validateProductName(name);
		setName(name);

		if (error) {
			attachErrorAlert(error, e);
		} else {
			resetErrorAlert('name');
		}
	};
	// product price input handler
	const handleProductPrice = (e) => {
		const price = e.target.value;
		let { error } = validate.validateProductPrice(price);
		setPrice(price);

		if (error) {
			attachErrorAlert(error, e);
		} else {
			resetErrorAlert('price');
		}
	};

	// handler for hidden input field to upload from user machine
	const handleFileUpload = (e) => {
		setPhoto(e.target.files[0]);
	};
	// handler to click hidden input field to upload from user machine
	const handlePhotoUpload = (e) => {
		fileUploader.current.click();
	};
	// Form Submiision
	const handleSubmitProduct = async () => {
		const formdata = new FormData();
		formdata.append('name', name);
		formdata.append('photo', photo);
		formdata.append('price', price);
		formdata.append('category', category._id);
		try {
			// POST to API
			await addNewProduct(formdata).unwrap();
			// Reset input fields
			resetInputs();
		} catch (e) {
			console.error(e);
		}
	};

	// Input fields error status
	const isNameError = error.name.error;
	const nameErrorMsg = error.name.message;
	const isPriceError = error.price.error;
	const priceErrorMsg = error.price.message;

	// Submit button disable condition
	const canSubmit =
		[!isNameError, photo, name.length > 0].every(Boolean) && !isLoading;

	// Form components styles
	const {
		wrapper,
		nameField,
		logoUpload,
		submitForm,
		hiddenInput,
		progressText,
	} = addCategoryStyles;
	return (
		<Box sx={{ borderRight: '1px solid', width: '50%' }}>
			<h3>Add new product</h3>
			<form noValidate autoComplete='off'>
				<Box sx={wrapper}>
					{/* Product Name */}
					<TextField
						sx={nameField}
						name='name'
						onChange={handleProductName}
						error={isNameError}
						id='product-name'
						value={name}
						placeholder='Product Name'
						helperText={isNameError && nameErrorMsg}
					/>

					{/* Product Price */}
					<TextField
						type={'number'}
						sx={nameField}
						name='name'
						onChange={handleProductPrice}
						error={isPriceError}
						id='product-price'
						value={price}
						placeholder='Product price'
						helperText={isPriceError && priceErrorMsg}
					/>

					{/* Photo upload */}
					<input
						onChange={handleFileUpload}
						type='file'
						name='logo'
						className='file-upload'
						ref={fileUploader}
						style={hiddenInput}
					/>
					<Button
						sx={logoUpload}
						variant='outlined'
						onClick={handlePhotoUpload}>
						Upload Product Photo
					</Button>

					{/* Submit */}
					<Button
						sx={submitForm}
						variant='outlined'
						onClick={handleSubmitProduct}
						disabled={!canSubmit}>
						{isLoading ? (
							<CircularProgress
								sx={progressText}
								color='secondary'
								size={'1rem'}
							/>
						) : (
							<Typography sx={{ fontSize: '1rem' }} variant='button'>
								Submit
							</Typography>
						)}
					</Button>

					{/* Show success message */}
					{isSuccess && (
						<CustomAlert
							severity='success'
							text='Product was added'
							condition={isSuccess}
							width='25%'
						/>
					)}

					{/* Show error message */}
					{isError && (
						<CustomAlert
							severity='error'
							text='Product was NOT added !!'
							condition={isError}
							width='25%'
						/>
					)}
				</Box>
			</form>
		</Box>
	);
}

export default AddProduct;
