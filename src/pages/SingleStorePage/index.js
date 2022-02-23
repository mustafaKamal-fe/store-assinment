import React from 'react';
import { Box } from '@mui/system';
import { useLocation } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import StoreContainer from '../../components/container/storeContainer';
import { initSingleStoreStyles } from './styles';

function SingleStore({ store }) {
	const styles = initSingleStoreStyles(store.logo);
	const { logo, description } = styles;
	return (
		<React.Fragment>
			<Box sx={logo} />

			<Paper variant='outlined' sx={description}>
				<Typography>{store.description}</Typography>
			</Paper>
		</React.Fragment>
	);
}

const SingleStorePage = () => {
	const location = useLocation();
	const store = location.state.store;
	return (
		<StoreContainer name={store.name}>
			<SingleStore store={store} />
		</StoreContainer>
	);
};

export default SingleStorePage;
