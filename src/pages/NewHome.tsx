import React from 'react';
import { AddCircle } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

import CustomBookmarks from '../components/BookmarkSignpost/CustomBookmarks';
import SharedBookmarks from '../components/BookmarkSignpost/SharedBookmarks';
import { useTranslation } from '../hooks/useTranslation';

const NewHome = () => {
	const t = useTranslation();
	return (
		<Container
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				marginBottom: 'auto'
			}}
		>
			<Typography>My bookmarks</Typography>
			<Box
				sx={{
					display: 'flex'
				}}
			>
				<Typography>{t('customBookmarks')}</Typography>
				<AddCircle />
			</Box>
			<CustomBookmarks />
			<Box
				sx={{
					display: 'flex'
				}}
			>
				<Typography>{t('sharedBookmarks')}</Typography>
				<AddCircle />
			</Box>
			<SharedBookmarks />
		</Container>
	);
};

export default NewHome;
