import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';

import BookAnimation from '../components/BookAnimation';

const Login = () => {
	const [userName, setUserName] = useState('');
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'row',
				height: '100%',
				width: '100%'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					height: '100%',
					width: '50%',
					alignItems: 'center'
				}}
			>
				<BookAnimation />
			</Box>
			<Typography color="azure">gsag</Typography>
		</Container>
	);
};

export default Login;
