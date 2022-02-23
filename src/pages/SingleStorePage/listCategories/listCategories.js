import { Alert, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useGetCategoryQuery } from '../../../features/api/apiSlice';
import CategoresTable from './CategoriesTable';
export const { categoriesListTableStyles } = require('../styles');

export default function ListCategories({ storeID }) {
	// RTK Query passing store id to fetch its categories
	const { isError, isLoading, isFetching, data } = useGetCategoryQuery({
		storeID,
	});

	let categories;

	// styles
	const { box, wrapper } = categoriesListTableStyles;

	// Success
	if (data) {
		categories = data.categories;
		return (
			<Box sx={wrapper}>
				{/* categories Table */}
				{categories.length > 0 ? (
					<CategoresTable categories={categories} />
				) : (
					<Typography>The store has no catgories yet !! </Typography>
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
				<Alert severity='error'>Error Fetching Categories.</Alert>
			</Box>
		);
	}
}
