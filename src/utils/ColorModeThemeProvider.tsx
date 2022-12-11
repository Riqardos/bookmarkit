import { createTheme, ThemeProvider } from '@mui/material';
import React, {
	createContext,
	FC,
	PropsWithChildren,
	useEffect,
	useMemo,
	useState
} from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

import getThemeModePalette from './theme';

// eslint-disable-next-line
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ColorModeThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [localStorageMode, setLocalStorageMode] = useLocalStorage('themeMode');
	const newMode =
		localStorageMode === 'light' || localStorageMode === 'dark'
			? localStorageMode
			: 'light';
	const [mode, setMode] = useState<'light' | 'dark'>(newMode);

	useEffect(() => {
		setLocalStorageMode(mode);
	}, [mode]);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
			}
		}),
		[]
	);

	const theme = useMemo(() => createTheme(getThemeModePalette(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
