import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from 'react-router-dom';

export default function SideNavBar() {
	let navigate = useNavigate();

	const links = {
		browse: { text: 'Browse Stores', link: '/' },
		Add: { text: 'Create Store', link: '/store/add' },
	};

	const navigateTo = (page) => {
		navigate(page);
	};
	return (
		<List>
			<ListItem
				button
				key={links.browse.text}
				onClick={() => navigateTo(links.browse.link)}>
				<ListItemIcon>
					<SearchIcon />
				</ListItemIcon>
				<ListItemText primary={links.browse.text} />
			</ListItem>

			<ListItem
				button
				key={links.Add.text}
				onClick={() => navigateTo(links.Add.link)}>
				<ListItemIcon>
					<AddBoxIcon />
				</ListItemIcon>
				<ListItemText primary={links.Add.text} />
			</ListItem>
		</List>
	);
}
