import React from 'react';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Typography
} from '@mui/material';

import { Bookmark } from '../../utils/firebase';
import logo from '../../assets/navbarlogo.svg';

const BookmarkTile = ({ title, description, imageUrl }: Bookmark) => {
	console.log('afaf');
	return (
		<Card sx={{ minWidth: 275, height: '100%' }}>
			<CardMedia
				component="img"
				height="50%"
				width="100%"
				sx={{
					objectFit: 'scale-down',
					background: 'white',
					padding: '1rem'
				}}
				src={imageUrl !== '' ? imageUrl : logo}
				alt="Bookmark logo"
			/>
			<CardHeader title={title} />
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};
export default BookmarkTile;
