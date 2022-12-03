import { createTheme, ThemeProvider } from '@mui/material';
import React, { createContext, FC, PropsWithChildren, useMemo, useState } from 'react'
import getThemeModePalette from './theme';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ColorModeThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
        () => ({
          toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
          },
        }),
        [],
      );

      const theme = useMemo(
        () =>
          createTheme(getThemeModePalette(mode)),
        [mode],
      );

	return (
		<ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
			    {children}
            </ThemeProvider>
		</ColorModeContext.Provider>
	);
};