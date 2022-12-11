import React from 'react';
import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material';

import { useLanguage, Languages } from '../hooks/useTranslation';

const SelectLanguage = () => {
	const [language, setLanguage] = useLanguage();
	const handleChange = (event: SelectChangeEvent) => {
		setLanguage(event.target.value as Languages);
	};
	return (
		<FormControl sx={{ m: 1, minWidth: 120 }}>
			<Select
				value={language}
				onChange={handleChange}
				displayEmpty
				inputProps={{ 'aria-label': 'Without label' }}
			>
				<MenuItem value="sk">SK</MenuItem>
				<MenuItem value="en">EN</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SelectLanguage;
