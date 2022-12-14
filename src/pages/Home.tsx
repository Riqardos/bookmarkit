import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

import { useTranslation } from '../hooks/useTranslation';
import NewBookmarkButton from '../components/BookmarkSignpost/NewBookmarkButton';
import useGetAllUserBookmarks from '../utils/api/useGetAllUserBookmarks';
import Bookmarks from '../components/BookmarkSignpost/Bookmarks';
import SubscribeToBookmarkButton from '../components/BookmarkSignpost/SubscribeToBookmarkButton';

const Home = () => {
	const t = useTranslation();
	const { customBookmarks, sharedBookmarks, loading, error } =
		useGetAllUserBookmarks();

	return (
		<Container
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				marginBottom: 'auto',
				alignItems: 'center'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%'
				}}
			>
				<Typography
					sx={{
						fontSize: '2rem'
					}}
				>
					{t('customBookmarks')}
				</Typography>
				<NewBookmarkButton />
			</Box>
			<Bookmarks error={error} loading={loading} bookmarks={customBookmarks} />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					marginTop: '1rem'
				}}
			>
				<Typography
					sx={{
						fontSize: '2rem'
					}}
				>
					{t('sharedBookmarks')}
				</Typography>
				<SubscribeToBookmarkButton />
			</Box>
			<Bookmarks error={error} loading={loading} bookmarks={sharedBookmarks} />
		</Container>
	);
};

export default Home;
