import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

export default function SideNavBar() {
	let navigate = useNavigate();

	const navigateBack = () => {
		navigate(-1);
	};

	return (
		<List>
			<ListItem button onClick={navigateBack}>
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary={'BACK'} />
			</ListItem>
		</List>
	);
}
