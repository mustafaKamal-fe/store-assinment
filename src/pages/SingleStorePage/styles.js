export const initSingleStoreStyles = (logo) => {
	return {
		logo: {
			display: 'flex',
			justifyContent: 'center',
			width: '180px',
			height: '180px',
			borderRadius: '100px',
			border: '1px solid black',
			margin: 'auto',
			backgroundImage: `url(${logo})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundOrigin: 'content-box',
		},
		description: {
			margin: '3rem auto',
			padding: '1rem',
			width: '75%',
		},
	};
};

export const categoriesListTableStyles = {
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
	},
	box: { margin: 'auto', display: 'flex', justifyContent: 'center' },
};
