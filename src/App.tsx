import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';

import { routes } from './routes';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Home from './pages/Home';
import { ColorModeThemeProvider } from './utils/ColorModeThemeProvider';
import { LanguageProvider } from './hooks/useTranslation';
import Navbar from './components/Navbar';

const App = () => (
	<ColorModeThemeProvider>
		<LanguageProvider>
			<CssBaseline />
			<BrowserRouter>
				<Navbar />
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
		</LanguageProvider>
	</ColorModeThemeProvider>
);

export default App;
