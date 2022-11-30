import React, { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from 'react'

export type Theme = 'dark' | 'light';
type ThemeState = [Theme, Dispatch<SetStateAction<Theme>>];

export const ColorModeContext = createContext<ThemeState>(undefined as never);

export const useThemeMode = () => {};

export const ColorModeThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	// We can improve this by saving and loading the initial state from local storage
    const themeState = useState<Theme>('light');
    console.log(themeState);
	return (
		<ColorModeContext.Provider value={themeState}>
			{children}
		</ColorModeContext.Provider>
	);
};