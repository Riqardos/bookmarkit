import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Button, Container, CssBaseline } from '@mui/material';

import { routes } from './routes';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Home from './pages/Home';
import SwitchThemeButton from './components/SwitchThemeButton';
import { ColorModeThemeProvider } from './utils/ColorModeThemeProvider';
import logo from './logo.svg';

const App = () => (
	<ColorModeThemeProvider>
		<CssBaseline />
		<BrowserRouter>
			<div className="App">
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
			</div>
			<Container
				component="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					width: '100vw',
					pt: 8,
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
