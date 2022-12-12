import { PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Palette {
		yellow?: string;
		orange?: string;
		pink?: string;
		azure?: string;
		darkBlue?: string;
		lightBlue?: string;
		purple?: string;
		green?: string;
		lightGreen?: string;
		red?: string;
		lightGrey?: string;
	}
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface PaletteOptions {
		yellow?: string;
		orange?: string;
		pink?: string;
		azure?: string;
		darkBlue?: string;
		lightBlue?: string;
		purple?: string;
		green?: string;
		lightGreen?: string;
		red?: string;
		lightGrey?: string;
	}
}

const getThemeModePalette = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
					primary: {
						light: '#757ce8',
						main: '#3f50b5',
						dark: '#002884',
						contrastText: '#2d2e38'
					},
					background: {
						default: grey[100],
						paper: grey[100]
					},
					// custom colors, use preferably
					yellow: '#f5fc28',
					orange: '#f19408',
					pink: '#df2ea7',
					azure: '#6ab7FF',
					darkBlue: '#2a2fc7',
					lightBlue: '#b5dbec',
					purple: '#a41bdf',
					green: '#68a357',
					lightGreen: '#b2cca4',
					red: '#c22222',
					lightGrey: '#4c4c4c'
			  }
			: {
					// palette values for dark mode
					primary: {
						light: '#757ce8',
						main: '#3f50b5',
						dark: '#002884',
						contrastText: '#fff'
					},
					background: {
						default: grey[900],
						paper: grey[900]
					},
					// applied to icons
					text: {
						primary: '#f19408'
					},
					// custom colors, use preferably
					yellow: '#f4fa4b',
					orange: '#f19408',
					pink: '#df2ea7',
					azure: '#6ab7ff',
					lightBlue: '#b5dbec',
					darkBlue: '#2a2fc7',
					purple: '#c184db',
					green: '#68a357',
					lightGreen: '#b2cca4',
					red: '#c22222',
					lightGrey: '#4c4c4c'
			  })
	},
	typography: {
		fontFamily: ['Comfortaa', 'Roboto'].join(',')
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				// Css rule that makes sure app is always 100% height of window
				'body, #root': {
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh'
				},
				'ul': {
					listStyle: 'none',
					paddingInlineStart: 0
				}
			}
		}
	}
});

export default getThemeModePalette;
