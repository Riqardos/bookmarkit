import { AddCircle } from '@mui/icons-material';
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	DialogContentText,
	TextField,
	Tooltip,
	Divider,
	Switch,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText
} from '@mui/material';
import { useState } from 'react';

import useField from '../../hooks/useField';
import { useTranslation } from '../../hooks/useTranslation';
import useSubscribeToBookmark from '../../utils/api/useSubscribeToBookmark';

const SubscribeToBookmarkButton = () => {
	const t = useTranslation();
	const { handleSubmit, submitError } = useSubscribeToBookmark();
	const [dialogOpen, setDialogOpen] = useState(false);
	const [uuid, uuidProps] = useField('uuid', true);

	const handleClickOpen = () => {
		setDialogOpen(true);
	};

	const handleClickSubmit = () => handleSubmit({ bookmarkUUID: uuid });

	const handleClose = () => {
		setDialogOpen(false);
	};

	return (
		<>
			<Tooltip title={t('addSharedBookmark')} placement="top">
				<Button onClick={handleClickOpen} color="inherit">
					<AddCircle fontSize="large" />
				</Button>
			</Tooltip>
			<Dialog open={dialogOpen} onClose={handleClose}>
				<DialogTitle>{t('addSharedBookmark')}</DialogTitle>
				<DialogContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						padding: '3rem',
						rowGap: '1rem'
					}}
				>
					<DialogContentText>{t('subscribeToBookmarkText')}</DialogContentText>
					<Divider />
					<TextField label={t('name')} {...uuidProps} type="text" />
					<Divider />
					{submitError && <span>{submitError}</span>}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>{t('cancel')}</Button>
					<Button
						onClick={handleClickSubmit}
						variant="outlined"
						sx={{ background: 'orange' }}
					>
						{t('submit')}
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default SubscribeToBookmarkButton;
