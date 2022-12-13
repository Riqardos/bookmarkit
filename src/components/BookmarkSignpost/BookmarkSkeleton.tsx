import { Card, CardContent, Typography, Skeleton } from '@mui/material';

const BookmarkSkeleton = () => (
	<Card sx={{ minWidth: 275 }}>
		<CardContent>
			<Skeleton variant="rectangular" width="100%">
				<div style={{ paddingTop: '57%' }} />
			</Skeleton>
			<Skeleton width="100%">
				<Typography>.</Typography>
			</Skeleton>
		</CardContent>
	</Card>
);

export default BookmarkSkeleton;
