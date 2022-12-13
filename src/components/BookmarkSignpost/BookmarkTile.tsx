import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material';
import React from 'react';

const BookmarkTile = ({ title }: { title: string }) => {
	console.log('afaf');
	return (
		<Card sx={{ minWidth: 275, height: '100%' }}>
			<CardMedia
				component="img"
				height="60%"
				width="100%"
				sx={{
					objectFit: 'scale-down',
					background: 'white'
				}}
				image="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
				alt="Paella dish"
			/>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{title}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};
export default BookmarkTile;
