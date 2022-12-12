import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/navbarlogo.svg';
import useLoggedInUser from '../hooks/useLoggedInUser';
import { routes } from '../routes';
import { signOut } from '../utils/firebase';

import SwitchThemeButton from './SwitchThemeButton';

const Navbar = () => {
	const user = useLoggedInUser();

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
						{!user ? (
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
						) : (
							<Button
								onClick={signOut}
								component={Link}
								to={routes.login}
								sx={{
									fontFamily: 'inherit',
									color: 'orange'
								}}
							>
								Logout
							</Button>
						)}
						<SwitchThemeButton />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
