import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/navbarlogo.svg';
import { routes } from '../routes';

import SwitchThemeButton from './SwitchThemeButton';

const Navbar = () => {
	console.log('afa');

	return (
		<AppBar
			sx={{
				position: 'sticky',
				display: 'flex',
				top: 0,
				background: 'inherit'
			}}
		>
			<Container sx={{ width: '100%' }}>
				<Toolbar
					sx={{
						display: 'flex',
						width: '100%',
						justifyContent: 'space-between'
					}}
				>
					<Box />
					<Button
						component={Link}
						to={routes.home}
						sx={{ height: '3rem', borderRadius: '1rem' }}
					>
						<Logo height="100%" />
					</Button>

					<Box>
						<Button
							component={Link}
							to={routes.login}
							sx={{
								fontFamily: 'inherit',
								color: 'orange'
							}}
						>
							Login
						</Button>
						<SwitchThemeButton />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
