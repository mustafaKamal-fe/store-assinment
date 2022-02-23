import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useGetStoreQuery } from '../../features/api/apiSlice';
import { Alert, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import StoresTable from './StoresTable';
import AppContainer from '../../components/container/appContainer/index';
import { browseStoresStyles } from './styles';

function BrowseStores() {
	const limit = 4; // stores fetch limit
	const [page, setPage] = useState(1); // contorl paging

	// handle page change
	const handleChange = (_event, value) => {
		setPage(value);
	};

	// RTK Query passing page and limit params for API
	const { isError, isLoading, isFetching, data } = useGetStoreQuery({
		page,
		limit,
	});

	// styles
	const { box, paginationComponent, wrapper } = browseStoresStyles;
	let stores, totalPages;

	// Success
	if (data) {
		totalPages = data.pagination.totalPages;
		stores = data.pagination.stores;
		return (
			<Box sx={wrapper}>
				{/* Stores Table */}
				<StoresTable stores={stores} />
				{/* Pagination control */}
				<Pagination
					sx={paginationComponent}
					count={totalPages}
					page={page}
					onChange={handleChange}
				/>
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
				<Alert severity='error'>Error Fetching Stores.</Alert>
			</Box>
		);
	}
}

const BrowseStoresPage = () => (
	<AppContainer>
		<BrowseStores />
	</AppContainer>
);
export default BrowseStoresPage;
