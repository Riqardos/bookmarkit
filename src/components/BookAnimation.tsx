import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
	'circle': {
		width: '100px',
		height: '100px',
		borderRadius: '50%',
		position: 'relative',
		animation: 'circle 6s linear infinite'
	},
	'@keyframes circle': {
		'0%': {
			transform: 'rotate(0deg) translate(-165px) rotate(0deg)'
		},
		'100%': {
			transform: 'rotate(360deg) translate(-165px) rotate(-360deg)'
		}
	},
	'context': {
		position: 'absolute',
		top: '50%',
		left: '50%',
		perspective: '2000px',
		transformStyle: 'preserve-3d'
	},
	'square': {
		border: '1px solid transparent',
		height: '500px',
		width: '30px',
		background: 'black',
		position: 'absolute',
		animation: 'square 100s linear infinite alternate'
	},
	'book': {
		width: '18rem',
		height: '24rem',
		borderRadius: '4%',
		background: 'rgb(181, 219, 236)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		animation: 'bookMovement 1.5s linear'
	},
	'book__title': {
		fontSize: '3rem',
		fontFamily: 'Comfortaa',
		fontStyle: 'bold',
		color: theme.palette.orange,
		fontWeight: 900
	},
	'bookmark': {
		background: theme.palette.orange, //todo get color from theme
		color: theme.palette.primary.main, //todo get color from theme
		height: '4rem',
		fontSize: '1.5rem',
		width: '50%',
		fontFamily: 'Comfortaa',
		fontStyle: 'bold',
		padding: '1rem',
		borderRadius: '2rem 2rem 0 0',
		transform: 'translate(75%, 10%)',
		position: 'relative',
		animation: 'unvisible 1.5s linear, bookmark-appears 2s 1.5s linear'
	},
	'bookmark__it': {
		animation: 'unvisible 4s linear',
		color: 'white'
	},
	'@keyframes unvisible': {
		from: {
			opacity: 0
		},
		to: {
			opacity: 0
		}
	},
	'@keyframes bookmark-appears': {
		from: {
			bottom: '-4rem'
		},
		to: {
			bottom: '0px'
		}
	},
	'@keyframes bookMovement': {
		'0%': {
			transform: 'rotate(0deg)',
			left: '-5000px'
		},
		'45%': {
			transform: 'rotate(0deg)',
			left: '25%'
		},
		'50%': {
			'transform': 'rotate(0deg)',
			'left': '25%',
			'-webkit-transform': 'skew(-10deg, -0deg)'
		},
		'55%': {
			transform: 'rotate(0deg)',
			left: '25%'
		},
		'100%': {
			left: '0%'
		}
	}
}));

const BookAnimation = () => {
	const classes = useStyles();
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<div className={classes.bookmark}>
				<span>mark</span>
				<span className={classes.bookmark__it}>it</span>
			</div>
			<div className={classes.book}>
				<span className={classes.book__title}>book</span>
			</div>
		</Box>
	);
};

export default BookAnimation;
