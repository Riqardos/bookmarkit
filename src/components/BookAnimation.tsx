import { Box } from '@mui/material';
import React from 'react';

const BookAnimation = () => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column'
		}}
	>
		<div className="bookmark">
			<span>mark</span>
			<span className="bookmark__it">it</span>
		</div>
		<div className="book">
			<span className="book__title">book</span>
		</div>
	</Box>
);

export default BookAnimation;
