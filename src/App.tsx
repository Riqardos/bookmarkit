import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';

import { ColorModeThemeProvider } from './utils/ColorModeThemeProvider';
import { LanguageProvider } from './hooks/useTranslation';
import Navbar from './components/Navbar';
import { UserProvider } from './hooks/useLoggedInUser';
import AppRoutes from './components/AppRoutes';

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
						<AppRoutes />
					</Container>
				</BrowserRouter>
			</LanguageProvider>
		</UserProvider>
	</ColorModeThemeProvider>
);

export default App;
