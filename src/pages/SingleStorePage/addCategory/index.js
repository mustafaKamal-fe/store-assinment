import React, { useRef, useState } from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, CircularProgress, Typography } from '@mui/material';
import validate from './validate';
import { addCategoryStyles } from './styles';
import CustomAlert from '../../../components/CustomAlert';
import { useAddCategoryMutation } from '../../../features/api/apiSlice';

function AddCategory({ store }) {
	const [name, setName] = useState('');
	const [logo, setLogo] = useState(null);
	const [error, setError] = useState({
		name: { error: false, message: '' },
		description: { error: false, message: '' },
	});
	const fileUploader = useRef(null);
	const [addNewCategory, { isError, isSuccess, isLoading }] =
		useAddCategoryMutation();

	// Reset fileds
	const resetInputs = () => {
		setName('');
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

	// Store name input handler
	const handleCategoryName = (e) => {
		const name = e.target.value;
		let { error } = validate.validateCategoryName(name);
		setName(name);

		if (error) {
			attachErrorAlert(error, e);
		} else {
			resetErrorAlert('name');
		}
	};

	// handler for hidden input field to upload from user machine
	const handleFileUpload = (e) => {
		setLogo(e.target.files[0]);
	};
	// handler to click hidden input field to upload from user machine
	const handleLogoUpload = (e) => {
		fileUploader.current.click();
	};
	// Form Submiision
	const handleSubmitCategory = async () => {
		const formdata = new FormData();
		formdata.append('name', name);
		formdata.append('logo', logo);
		formdata.append('store', store._id);
		try {
			// POST to API
			await addNewCategory(formdata).unwrap();
			// Reset input fields
			resetInputs();
		} catch (e) {
			console.error(e);
		}
	};

	// Input fields error status
	const isNameError = error.name.error;
	const nameErrorMsg = error.name.message;

	// Submit button disable condition
	const canSubmit =
		[!isNameError, logo, name.length > 0].every(Boolean) && !isLoading;

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
			<h3>Add new category</h3>
			<form noValidate autoComplete='off'>
				<Box sx={wrapper}>
					{/* Category Name */}
					<TextField
						sx={nameField}
						name='name'
						onChange={handleCategoryName}
						error={isNameError}
						id='category-name'
						value={name}
						placeholder='Category Name'
						helperText={isNameError && nameErrorMsg}
					/>

					{/* Logo upload */}

					<input
						onChange={handleFileUpload}
						type='file'
						name='logo'
						className='file-upload'
						ref={fileUploader}
						style={hiddenInput}
					/>
					<Button sx={logoUpload} variant='outlined' onClick={handleLogoUpload}>
						Upload Category Logo
					</Button>

					{/* Submit */}
					<Button
						sx={submitForm}
						variant='outlined'
						onClick={handleSubmitCategory}
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
							text='Category was added'
							condition={isSuccess}
							width='25%'
						/>
					)}

					{/* Show error message */}
					{isError && (
						<CustomAlert
							severity='error'
							text='Category was NOT added !!'
							condition={isError}
							width='25%'
						/>
					)}
				</Box>
			</form>
		</Box>
	);
}

export default AddCategory;
