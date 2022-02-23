import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CategoresTable({ products }) {
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
					</TableRow>
				</TableHead>
				<TableBody>
					{products.map((category, i) => (
						<TableRow
							key={category.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align='left'>{i + 1}</TableCell>
							<TableCell align='left'>{category._id}</TableCell>
							<TableCell align='left'>{category.name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
