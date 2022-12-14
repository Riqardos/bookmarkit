import React, { useState } from 'react';
import {
	Button,
	Select,
	TextField,
	MenuItem,
	FormControl,
	FormControlLabel,
	InputLabel,
	Checkbox,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	SelectChangeEvent,
	Box
} from '@mui/material';
import { NodeModel } from '@minoru/react-dnd-treeview';

import { useTranslation } from '../hooks/useTranslation';

import { CustomData } from './types';

type Props = {
	open: boolean;
	tree: NodeModel[];
	nodeDialog: NodeModel<CustomData> | undefined;
	onClose: () => void;
	onSubmit: (e: Omit<NodeModel<CustomData>, 'id'>) => void;
	onEdit: (
		id: NodeModel['id'],
		editNode: Omit<NodeModel<CustomData>, 'id'>
	) => void;
};

export const AddDialog: React.FC<Props> = props => {
	const t = useTranslation();
	const [text, setText] = useState(
		props.nodeDialog ? props.nodeDialog.text : ''
	);
	const [url, setUrl] = useState(props.nodeDialog?.data?.url ?? '');
	const [parent, setParent] = useState(
		props.nodeDialog ? Number(props.nodeDialog.parent) : 0
	);
	const [droppable, setDroppable] = useState(
		props.nodeDialog ? props.nodeDialog.droppable : false
	);

	const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	const handleChangeParent = (e: SelectChangeEvent<number>) => {
		setParent(Number(e.target.value));
	};

	const handleChangeDroppable = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDroppable(e.target.checked);
	};

	return (
		<Dialog open={props.open} onClose={props.onClose} maxWidth="xl">
			<DialogTitle>Add New Bookmark</DialogTitle>
			<DialogContent>
				<Box
					sx={{
						marginY: 2,
						display: 'grid',
						gap: '16px'
					}}
				>
					<TextField
						label={t('bookmarkName')}
						onChange={handleChangeText}
						value={text}
					/>
					<FormControl sx={{ width: '100%' }}>
						<InputLabel>{t('folder')}</InputLabel>
						<Select
							label={t('folder')}
							onChange={handleChangeParent}
							value={parent}
						>
							<MenuItem value={0}>(root)</MenuItem>
							{props.tree
								.filter(node => node.droppable === true)
								.map(node => (
									<MenuItem key={node.id} value={node.id}>
										{node.text}
									</MenuItem>
								))}
						</Select>
					</FormControl>
					<FormControlLabel
						control={
							<Checkbox
								checked={droppable}
								onChange={handleChangeDroppable}
								color="primary"
							/>
						}
						label={t('isFolder')}
					/>
					{!droppable && (
						<TextField label="Url" onChange={handleChangeUrl} value={url} />
					)}
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.onClose}>{t('cancel')}</Button>
				<Button
					disabled={text === ''}
					onClick={() => {
						if (props.nodeDialog) {
							props.onEdit(props.nodeDialog.id, {
								text,
								parent,
								droppable,
								data: {
									url
								}
							});
						} else {
							props.onSubmit({
								text,
								parent,
								droppable,
								data: {
									url
								}
							});
						}
					}}
				>
					{t('submit')}
				</Button>
			</DialogActions>
		</Dialog>
	);
};
