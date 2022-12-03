import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Button, Container } from '@mui/material';

import { routes } from './routes';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => (
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
		</div>
		<Container
			maxWidth="sm"
			component="main"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
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
);

export default App;
