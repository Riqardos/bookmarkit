import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';

import { routes } from './routes';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import { ColorModeThemeProvider } from './utils/ColorModeThemeProvider';
import { LanguageProvider } from './hooks/useTranslation';
import Navbar from './components/Navbar';
import { UserProvider } from './hooks/useLoggedInUser';
import Bookmark from './pages/Bookmark';
import NewHome from './pages/NewHome';
import Home from './pages/Home';

const App = () => (
	<ColorModeThemeProvider>
		<UserProvider>
			<LanguageProvider>
				<CssBaseline />
				<BrowserRouter>
					<Navbar />
					<Container
						component="main"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
							pt: 8,
							gap: 2
						}}
					>
						<Routes>
							<Route path={routes.home} element={<NewHome />} />
							<Route path={routes.home2} element={<Home />} />
							<Route path={routes.login} element={<Login />} />
							<Route path={routes.bookmark} element={<Bookmark />} />
							<Route path={routes.notFound} element={<NotFound />} />
						</Routes>
					</Container>
				</BrowserRouter>
			</LanguageProvider>
		</UserProvider>
	</ColorModeThemeProvider>
);

export default App;
