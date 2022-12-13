import React from 'react';
import { Grid } from '@mui/material';

import { Bookmark } from '../../utils/firebase';

import BookmarkTile from './BookmarkTile';

const BookmarkGrid = ({ bookmarks }: { bookmarks: Bookmark[] }) => (
	<Grid
		container
		spacing={3}
		sx={{
			padding: '1rem'
		}}
	>
		{bookmarks.map(b => (
			<Grid item xs={4} key={b.id}>
				<BookmarkTile {...b} />
			</Grid>
		))}
	</Grid>
);
export default BookmarkGrid;
