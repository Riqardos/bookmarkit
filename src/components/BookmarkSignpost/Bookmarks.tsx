import React from 'react';
import { Box, Typography } from '@mui/material';

import { useTranslation } from '../../hooks/useTranslation';
import { Bookmark } from '../../utils/firebase';

import BookmarkGrid from './BookmarkGrid';
import BookmarksLoading from './BookmarksLoading';

const Bookmarks = ({
	bookmarks,
	error,
	loading
}: {
	bookmarks?: Bookmark[];
	error?: string;
	loading?: boolean;
}) => {
	const t = useTranslation();
	if (error) {
		return <span>Error</span>;
	}

	if (loading || !bookmarks) {
		return <BookmarksLoading />;
	}

	if (!bookmarks.length) {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					background: 'lightGrey',
					borderRadius: '1rem',
					padding: '1rem',
					margin: '1rem',
					color: 'black',
					opacity: 0.3
				}}
			>
				<Typography>{t('noBookmarkFound')}</Typography>
			</Box>
		);
	}

	return <BookmarkGrid bookmarks={bookmarks} />;
};
export default Bookmarks;
