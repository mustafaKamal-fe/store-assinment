import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, CircularProgress, Typography } from '@mui/material';
import AppContainer from '../../components/container/appContainer/index';
import validate from './validate';
import { useAddStoreMutation } from '../../features/api/apiSlice';
import CustomAlert from '../../components/CustomAlert';
import { addStoreStyles } from './styles';

function AddStore() {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [logo, setLogo] = useState(null);
	const [error, setError] = useState({
		name: { error: false, message: '' },
		description: { error: false, message: '' },
	});
	const fileUploader = useRef(null);
	// RTK Mutation
	const [addNewStore, { isError, isLoading, isSuccess }] =
		useAddStoreMutation();

	// Reset fileds
	const resetInputs = () => {
		setName('');
		setDescription('');
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
	const handleStoreName = (e) => {
		const name = e.target.value;
		let { error } = validate.validateStoreName(name);
		setName(name);

		if (error) {
			attachErrorAlert(error, e);
		} else {
			resetErrorAlert('name');
		}
	};

	// Store description input handler
	const handleStoreDescription = (e) => {
		const description = e.target.value;
		let { error } = validate.validateStoreDescription(description);
		setDescription(description);

		if (error) {
			attachErrorAlert(error, e);
		} else {
			resetErrorAlert('description');
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

	// Form submission
	const handleSubmitStore = async () => {
		const formdata = new FormData();
		formdata.append('name', name);
		formdata.append('description', description);
		formdata.append('logo', logo);
		try {
			// POST to API
			await addNewStore(formdata).unwrap();
			// Reset input fields
			resetInputs();
		} catch (e) {
			console.error(e);
		}
	};

	// Input fields error status
	const isNameError = error.name.error;
	const isDescError = error.description.error;
	const nameErrorMsg = error.name.message;
	const descErrorMsg = error.description.message;

	// Submit button disable condition
	const canSubmit =
		[!isNameError, !isDescError, logo, name.length > 0].every(Boolean) &&
		!isLoading;

	// Form components styles
	const {
		wrapper,
		nameField,
		descriptionField,
		logoUpload,
		submitForm,
		hiddenInput,
		progressText,
	} = addStoreStyles;

	return (
		<React.Fragment>
			<h1>Create New Store</h1>
			<form noValidate autoComplete='off'>
				<Box sx={wrapper}>
					{/* Store Name */}
					<TextField
						sx={nameField}
						name='name'
						onChange={handleStoreName}
						error={isNameError}
						id='store-name'
						label='Store Name'
						value={name}
						placeholder='Store Name'
						helperText={isNameError && nameErrorMsg}
					/>

					{/* Store Description */}
					<TextField
						sx={descriptionField}
						fullWidth
						multiline
						name='description'
						onChange={handleStoreDescription}
						error={isDescError}
						id='store-description'
						label='Store Description'
						value={description}
						placeholder='Description'
						helperText={isDescError && descErrorMsg}
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
						Upload Store Logo
					</Button>

					{/* Submit */}
					<Button
						sx={submitForm}
						variant='outlined'
						onClick={handleSubmitStore}
						disabled={!canSubmit}>
						{isLoading ? (
							<CircularProgress
								sx={progressText}
								color='secondary'
								size={'1rem'}
							/>
						) : (
							<Typography sx={{ fontSize: '1rem' }} variant='button'>
								Create Store
							</Typography>
						)}
					</Button>

					{/* Show success message */}
					{isSuccess && (
						<CustomAlert
							severity='success'
							text='Store was added'
							condition={isSuccess}
						/>
					)}

					{/* Show error message */}
					{isError && (
						<CustomAlert
							severity='error'
							text='Store was NOT added !!'
							condition={isError}
						/>
					)}
				</Box>
			</form>
		</React.Fragment>
	);
}

const AddStorePage = () => (
	<AppContainer>
		<AddStore />
	</AppContainer>
);
export default AddStorePage;
