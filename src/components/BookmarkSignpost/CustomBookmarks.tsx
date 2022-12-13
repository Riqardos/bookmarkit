import { Box, Typography } from '@mui/material';
import React from 'react';

import useUserBookmarks from '../../utils/api/useUserBookmarks';

import BookmarkGrid from './BookmarkGrid';
import { bookmarksData } from './BookmarksData';
import BookmarkSkeleton from './BookmarkSkeleton';
import BookmarksLoading from './BookmarksLoading';

const CustomBookmarks = () => {
	const { data, error, loading } = useUserBookmarks();
	if (error) {
		return <span>Error</span>;
	}

	if (loading) {
		return <BookmarksLoading />;
	}

	return <BookmarkGrid bookmarks={data} />;
};
export default CustomBookmarks;
