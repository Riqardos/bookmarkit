import React from 'react';
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions
} from '@mui/material';

import { useTranslation } from '../hooks/useTranslation';

type Props = {
	title: string;
	description?: string;
	onNo: () => void;
	onYes: () => void;
};

export const AlertDialog: React.FC<Props> = props => {
	const t = useTranslation();
	return (
		<Dialog open onClose={props.onNo} maxWidth="xl">
			<DialogTitle>{props.title}</DialogTitle>
			<DialogContent>{props.description}</DialogContent>
			<DialogActions>
				<Button onClick={props.onYes}>{t('yes')}</Button>
				<Button onClick={props.onNo}>{t('no')}</Button>
			</DialogActions>
		</Dialog>
	);
};
