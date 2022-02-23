import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';

/**
 * Custom alert component that will unmount after within 4000ms after prompting users.
 * @param {*} props
 * @returns
 */
function CustomAlert(props) {
	const { severity, text, condition, width = '15%' } = props;

	const [display, setDisplay] = useState(condition);

	useEffect(() => {
		setTimeout(() => {
			setDisplay(false);
		}, 4000);
	}, []);

	if (display) {
		return (
			<Alert
				sx={{
					m: 'auto',
					width,
					marginTop: '2rem',
					border: '1px solid',
				}}
				severity={severity}>
				{text}
			</Alert>
		);
	} else {
		return null;
	}
}

export default CustomAlert;
