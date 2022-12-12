import {
	Box,
	Button,
	Container,
	TextField,
	Typography,
	useTheme
} from '@mui/material';
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BookAnimation from '../components/BookAnimation';
import useField from '../hooks/useField';
import { signIn, signUp } from '../utils/firebase';

const Login = () => {
	const theme = useTheme();

	const navigate = useNavigate();
	const [isSignUp, setSignUp] = useState(false);

	const [email, usernameProps] = useField('email', true);
	const [password, passwordProps] = useField('password', true);

	const [submitError, setSubmitError] = useState<string>();
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',

				width: '100%',
				height: '100%'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					width: '50%',
					height: '100%'
				}}
			>
				<BookAnimation />
			</Box>
			<Box
				component="form"
				onSubmit={async (e: FormEvent) => {
					e.preventDefault();
					try {
						isSignUp
							? await signUp(email, password)
							: await signIn(email, password);
						navigate('/');
					} catch (err) {
						setSubmitError(
							(err as { message?: string })?.message ?? 'Unknown error occurred'
						);
					}
				}}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',

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
						alignItems: 'center',

						gap: 2,
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
							background: theme.palette.orange,
							borderColor: theme.palette.orange,
							color: 'white'
						}}
					>
						Sign up
					</Button>
					<Button
						type="submit"
						variant="outlined"
						sx={{
							background: theme.palette.lightBlue,
							filter: 'brightness(110%)',
							borderColor: 'white',
							color: theme.palette.darkBlue
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
