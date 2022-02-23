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

export default function CategoresTable({ categories }) {
	const navigate = useNavigate();

	const navigateToCategoryPage = (category) => {
		navigate(`/category/${category._id}`, { state: { category } });
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
						<TableCell align='left'>Store</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{categories.map((category, i) => (
						<TableRow
							key={category.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align='left'>{i + 1}</TableCell>
							<TableCell align='left'>{category._id}</TableCell>
							<TableCell align='left'>{category.name}</TableCell>
							<TableCell align='left'>{category.store.name}</TableCell>
							<TableCell align='left'>
								<Button
									variant='contained'
									color='primary'
									onClick={() => {
										navigateToCategoryPage(category);
									}}>
									See category
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
