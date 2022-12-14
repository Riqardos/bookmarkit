import React from 'react';
import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Bookmark } from '../../utils/firebase';
import logo from '../../assets/navbarlogo.svg';
import CopyIdToClipboard from '../CopyIdToClipboard';

const BookmarkTile = ({ title, description, imageUrl, id }: Bookmark) => {
	const navigation = useNavigate();
	return (
		<Card
			sx={{ minWidth: 275, height: '75%', cursor: 'pointer' }}
			onClick={() => navigation(`/bookmarks/${id}`)}
		>
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
				<CopyIdToClipboard id={id} />
			</CardActions>
		</Card>
	);
};
export default BookmarkTile;
