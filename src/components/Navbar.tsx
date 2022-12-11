import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../routes';

import SwitchThemeButton from './SwitchThemeButton';

const Navbar = () => {
	console.log('afa');
	return (
		<Box className="App">
			<Button component={Link} to={routes.home}>
				Home
			</Button>

			<Button component={Link} to={routes.login}>
				Login
			</Button>
			<SwitchThemeButton />
		</Box>
	);
};

export default Navbar;
