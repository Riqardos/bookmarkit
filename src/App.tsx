import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import { ColorModeThemeProvider } from './utils/ColorModeThemeProvider';
import { LanguageProvider } from './hooks/useTranslation';
import Navbar from './components/Navbar';
import { UserProvider } from './hooks/useLoggedInUser';
import AppRoutes from './components/AppRoutes';
import SwitchThemeButton from './components/SwitchThemeButton';
import SelectLanguage from './components/SelectLanguage';

const Footer = () => {
	console.log('afgdsg');
	return (
		<Box
			sx={{
				width: '100%',
				maxWidth: '100%',
				height: '50%',
				display: 'flex',
				backgroundColor: 'black',
				color: 'white',
				justifyContent: 'space-around',
				padding: '6rem'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					color: 'white',
					spacing: 2
				}}
			>
				<GitHubIcon fontSize="large" />
				<span>Riqardos/bookmarkit</span>
			</Box>
			<Box>
				<SwitchThemeButton />
			</Box>
			<Box>
				<SelectLanguage />
			</Box>
		</Box>
	);
};

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
							minHeight: '100%',
							pt: 8,
							gap: 2
						}}
					>
						<AppRoutes />
					</Container>
					<Footer />
				</BrowserRouter>
			</LanguageProvider>
		</UserProvider>
	</ColorModeThemeProvider>
);

export default App;
