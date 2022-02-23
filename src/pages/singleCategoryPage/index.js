import React from 'react';
import { Box } from '@mui/system';
import { useLocation } from 'react-router-dom';
import StoreContainer from '../../components/container/storeContainer';
import { initSingleCategoryStyles } from './styles';
import ListProduct from './listProducts';
import AddProduct from './addProduct/index';

function SingleCategory({ category }) {
	const styles = initSingleCategoryStyles(category.logo);
	const { logo } = styles;
	return (
		<React.Fragment>
			<Box sx={logo} />

			<Box
				sx={{
					display: 'flex',
				}}>
				{/* Add product */}
				<AddProduct category={category} />
				{/* Display products */}
				<ListProduct categoryID={category._id} />
			</Box>
		</React.Fragment>
	);
}

const SingleCategoryPage = () => {
	const location = useLocation();
	const category = location.state.category;
	return (
		<StoreContainer name={category.name}>
			<SingleCategory category={category} />
		</StoreContainer>
	);
};

export default SingleCategoryPage;
