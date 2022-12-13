import { Grid } from '@mui/material';
import React from 'react';

import { BookmarkTileType } from '../types';

import BookmarkTile from './BookmarkTile';

const BookmarkGrid = ({ bookmarks }: { bookmarks: string[] }) => (
	<Grid
		container
		spacing={3}
		sx={{
			padding: '1rem'
		}}
	>
		{bookmarks.map((b, i) => (
			<Grid item xs={4} key={i}>
				<BookmarkTile title={b} />
			</Grid>
		))}
	</Grid>
);
export default BookmarkGrid;
