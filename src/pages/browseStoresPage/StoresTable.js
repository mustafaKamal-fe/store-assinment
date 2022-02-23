import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function StoresTable({ stores }) {
	const navigate = useNavigate();

	const navigateToStorePage = (store) => {
		navigate(`/store/${store._id}`, { state: { store } });
	};

	return (
		<TableContainer
			sx={{ width: '80%', margin: 'auto', minHeight: '200px' }}
			component={Paper}>
			<Table sx={{ width: '100%' }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell align='left'>Count</TableCell>
						<TableCell align='left'>ID</TableCell>
						<TableCell align='left'>Name</TableCell>
						<TableCell align='left'>Description</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{stores.map((store, i) => (
						<TableRow
							key={store.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align='left'>{i + 1}</TableCell>
							<TableCell align='left'>{store._id}</TableCell>
							<TableCell align='left'>{store.name}</TableCell>
							<TableCell align='left'>{store.description}</TableCell>
							<TableCell align='left'>
								<Button
									variant='contained'
									color='primary'
									onClick={() => {
										navigateToStorePage(store);
									}}>
									Visit Store
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
