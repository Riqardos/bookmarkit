import React from 'react';
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions
} from '@mui/material';

type Props = {
	title: string;
	description?: string;
	onNo: () => void;
	onYes: () => void;
};

export const AlertDialog: React.FC<Props> = props => (
	<Dialog open onClose={props.onNo} maxWidth="xl">
		<DialogTitle>{props.title}</DialogTitle>
		<DialogContent>{props.description}</DialogContent>
		<DialogActions>
			<Button onClick={props.onYes}>Yes</Button>
			<Button onClick={props.onNo}>No</Button>
		</DialogActions>
	</Dialog>
);
