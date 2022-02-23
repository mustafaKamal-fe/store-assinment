import { Alert, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useGetProductQuery } from '../../../features/api/apiSlice';
import ProductsTable from './ProductsTable';
export const { categoriesListTableStyles } = require('../styles');

export default function ListProduct({ categoryID }) {
	// RTK Query passing category id to fetch its products
	const { isError, isLoading, isFetching, data } = useGetProductQuery({
		categoryID,
	});

	let products;

	// styles
	const { box, wrapper } = categoriesListTableStyles;

	// Success
	if (data) {
		products = data.items;
		return (
			<Box sx={wrapper}>
				{/* products Table */}
				{products.length > 0 ? (
					<ProductsTable products={products} />
				) : (
					<Typography>The category has no products yet !! </Typography>
				)}
			</Box>
		);
	}

	// Loading (including intial loading on first page load)
	if (isLoading || isFetching) {
		return (
			<Box sx={box}>
				<CircularProgress size={80} />
			</Box>
		);
	}

	// Failure
	if (isError) {
		return (
			<Box sx={box}>
				<Alert severity='error'>Error Fetching products.</Alert>
			</Box>
		);
	}
}
