import { Grid } from '@mui/material';
import React from 'react';

import BookmarkSkeleton from './BookmarkSkeleton';

const BookmarksLoading = () => (
	<Grid
		container
		spacing={3}
		sx={{
			padding: '1rem'
		}}
	>
		<Grid item xs={4}>
			<BookmarkSkeleton />
		</Grid>
		<Grid item xs={4}>
			<BookmarkSkeleton />
		</Grid>
		<Grid item xs={4}>
			<BookmarkSkeleton />
		</Grid>
	</Grid>
);

export default BookmarksLoading;
