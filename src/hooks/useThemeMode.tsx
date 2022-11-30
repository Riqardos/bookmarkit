import React, { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from 'react'

export type ThemeType = 'dark' | 'light';
type ThemeState = [ThemeType, Dispatch<SetStateAction<ThemeType>>];

export const ColorModeContext = createContext<ThemeState>(undefined as never);

export const useThemeMode = () => {};

export const ColorModeThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	// We can improve this by saving and loading the initial state from local storage
    const themeState = useState<ThemeType>('light');
    console.log(themeState);
	return (
		<ColorModeContext.Provider value={themeState}>
			{children}
		</ColorModeContext.Provider>
	);
};