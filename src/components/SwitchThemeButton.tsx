import { DarkMode, WbSunny } from '@mui/icons-material';
import { IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';

import { ColorModeContext } from '../utils/ColorModeThemeProvider';

const SwitchThemeButton = () => {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	return (
		<IconButton
			sx={{ ml: 1 }}
			onClick={colorMode.toggleColorMode}
			color="inherit"
		>
			{theme.palette.mode === 'light' ? (
				<DarkMode fontSize="large" />
			) : (
				<WbSunny fontSize="large" />
			)}
		</IconButton>
	);
};

export default SwitchThemeButton;
