import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
	'book': {
		position: 'relative',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		width: '18rem',
		height: '24rem',

		animation: '$book-appears 1.5s linear',

		borderRadius: '4%',

		background: 'rgb(181, 219, 236)'
	},
	'book__title': {
		fontSize: '3rem',
		fontFamily: 'Comfortaa',
		fontWeight: 900,
		fontStyle: 'bold',
		color: theme.palette.darkBlue
	},
	'bookmark': {
		position: 'relative',

		transform: 'translate(75%, 10%)',

		animation: '$invisible 1.5s linear, $bookmark-appears 2s 1.5s linear',

		borderRadius: '2rem 2rem 0 0',
		width: '50%',
		height: '4rem',
		padding: '1rem',

		background: theme.palette.orange,

		fontSize: '1.5rem',
		fontFamily: 'Comfortaa',
		fontStyle: 'bold',
		color: theme.palette.darkBlue
	},
	'bookmark__it': {
		animation: '$invisible 4s linear',

		color: 'white'
	},
	'@keyframes invisible': {
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
	'@keyframes book-appears': {
		'0%': {
			left: '-5000px'
		},
		'45%': {
			left: '25%'
		},
		'50%': {
			'left': '25%',
			'-webkit-transform': 'skew(-10deg, -0deg)'
		},
		'55%': {
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
