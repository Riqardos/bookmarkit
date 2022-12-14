import React from 'react';
import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
	useTheme
} from '@mui/material';

import { useLanguage, Languages } from '../hooks/useTranslation';

const SelectLanguage = () => {
	const [language, setLanguage] = useLanguage();
	const theme = useTheme();
	const handleChange = (event: SelectChangeEvent) => {
		setLanguage(event.target.value as Languages);
	};
	return (
		<FormControl sx={{ m: 1, minWidth: 120 }}>
			<Select
				value={language}
				onChange={handleChange}
				displayEmpty
				sx={{
					background: theme.palette.orange,
					color: 'black'
				}}
				inputProps={{ 'aria-label': 'Without label' }}
			>
				<MenuItem value="sk">SK</MenuItem>
				<MenuItem value="en">EN</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SelectLanguage;
