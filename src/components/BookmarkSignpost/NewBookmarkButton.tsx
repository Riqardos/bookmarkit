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
	FormHelperText,
	FormLabel
} from '@mui/material';
import { useState } from 'react';

import useField from '../../hooks/useField';
import { useTranslation } from '../../hooks/useTranslation';
import useCreateCustomBookmark from '../../utils/api/useCreateCustomBookmark';

const NewBookmarkButton = () => {
	const t = useTranslation();
	const [dialogOpen, setDialogOpen] = useState(false);
	const [title, titleProps] = useField('name', true);
	const [description, descriptionProps] = useField('description', false);
	const [isPublic, setIsPublic] = useState(false);
	const [imageUrl, imageUrlProps] = useField('name', false);
	const { handleSubmit } = useCreateCustomBookmark();

	const handleClickOpen = () => {
		setDialogOpen(true);
	};

	const handleClickSubmit = () =>
		handleSubmit({ title, description, imageUrl, isPublic });

	const handleClose = () => {
		setDialogOpen(false);
	};

	return (
		<>
			<Tooltip title={t('addCustomBookmark')} placement="top">
				<Button onClick={handleClickOpen} color="inherit">
					<AddCircle fontSize="large" />
				</Button>
			</Tooltip>
			<Dialog open={dialogOpen} onClose={handleClose}>
				<DialogTitle>{t('addCustomBookmark')}</DialogTitle>
				<DialogContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						padding: '3rem',
						rowGap: '1rem'
					}}
				>
					<DialogContentText>{t('addCustomBookmarkText')}</DialogContentText>
					<Divider />
					<TextField label="Name" {...titleProps} type="text" />
					<TextField label="Image URL" {...imageUrlProps} type="text" />
					<TextField
						label="Description"
						{...descriptionProps}
						type="text"
						multiline
					/>
					<Divider />
					{/* this FormControl is sus, TODO */}
					<FormControl component="fieldset" variant="standard">
						<FormGroup>
							<FormControlLabel
								control={
									<Switch
										checked={isPublic}
										onChange={() => setIsPublic(prev => !prev)}
										inputProps={{ 'aria-label': 'controlled' }}
									/>
								}
								label={isPublic ? 'Public' : 'Private'}
							/>
						</FormGroup>
						<FormHelperText>
							{t('bookmarkVisibilitySwitchHelperText')}
						</FormHelperText>
					</FormControl>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						onClick={handleClickSubmit}
						variant="outlined"
						sx={{ background: 'orange' }}
					>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default NewBookmarkButton;
