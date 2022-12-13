import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

import CustomBookmarks from '../components/BookmarkSignpost/CustomBookmarks';
import SharedBookmarks from '../components/BookmarkSignpost/SharedBookmarks';

const NewHome = () => {
	console.log('New home');
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
			<CustomBookmarks />
			<Typography>Shared</Typography>
			<SharedBookmarks />
		</Container>
	);
};

export default NewHome;
