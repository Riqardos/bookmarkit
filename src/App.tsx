import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Box, Button, Container, CssBaseline } from '@mui/material';

import { routes } from './routes';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Home from './pages/Home';
import SwitchThemeButton from './components/SwitchThemeButton';
import { ColorModeThemeProvider } from './utils/ColorModeThemeProvider';

const App = () => (
	<ColorModeThemeProvider>
		<CssBaseline />
		<BrowserRouter>
			<Box
				sx={{
					textAlign: 'center'
				}}
			>
				<Button component={Link} to={routes.home}>
					Home
				</Button>
				<Button component={Link} to={routes.login}>
					Login
				</Button>
				<Button component={Link} to={routes.notFound}>
					Not found
				</Button>
				<SwitchThemeButton />
			</Box>
			<Container
				component="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
					width: '100vw',
					gap: 2
				}}
			>
				<Routes>
					<Route path={routes.home} element={<Home />} />
					<Route path={routes.login} element={<Login />} />
					<Route path={routes.notFound} element={<NotFound />} />
				</Routes>
			</Container>
		</BrowserRouter>
	</ColorModeThemeProvider>
);

export default App;
