import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import BookAnimation from '../components/BookAnimation';
import useField from '../hooks/useField';

const Login = () => {
	const [_isSignUp, setSignUp] = useState(false);

	const [_email, usernameProps] = useField('email', true);
	const [_password, passwordProps] = useField('password', true);

	const [submitError] = useState<string>();
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
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
			<Box
				component="form"
				onSubmit={() => {
					console.log('placeholder for submitting');
				}}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					p: 4,
					gap: 2
				}}
			>
				<Typography variant="h4" component="h2" textAlign="center" mb={3}>
					Login
				</Typography>
				<TextField label="email" {...usernameProps} type="email" />
				<TextField label="password" {...passwordProps} type="password" />
				<Box
					sx={{
						display: 'flex',
						gap: 2,
						alignItems: 'center',
						mt: 2
					}}
				>
					{submitError && (
						<Typography
							variant="caption"
							textAlign="right"
							sx={{ color: 'error.main' }}
						>
							{submitError}
						</Typography>
					)}
					<Button
						type="submit"
						variant="outlined"
						onClick={() => setSignUp(true)}
						sx={{
							background: 'orange',
							color: 'white',
							borderColor: 'white'
						}}
					>
						Sign up
					</Button>
					<Button
						type="submit"
						variant="outlined"
						sx={{
							background: 'lightBlue',
							opacity: 0.6,
							borderColor: 'white',
							color: 'darkBlue'
						}}
					>
						Sign in
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default Login;
