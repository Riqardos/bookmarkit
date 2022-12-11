import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import {
	Tree,
	NodeModel,
	MultiBackend,
	getBackendOptions,
	getDescendants
} from '@minoru/react-dnd-treeview';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';

import { useSwitch } from '../hooks/useSwitch';

import { CustomNode } from './CustomNode';
import { AddDialog } from './AddDialog';
import { CustomData } from './types';

const sampleData = [
	{
		id: 1,
		parent: 0,
		droppable: true,
		text: 'Folder 1'
	},
	{
		id: 2,
		parent: 1,
		droppable: false,
		text: 'File 1-1',
		data: {
			url: 'https://github.com/shunjizhan/react-folder-tree'
		}
	},
	{
		id: 3,
		parent: 1,
		droppable: false,
		text: 'File 1-2',
		data: {
			url: 'https://github.com/shunjizhan/react-folder-tree'
		}
	},
	{
		id: 4,
		parent: 0,
		droppable: true,
		text: 'Folder 2'
	},
	{
		id: 5,
		parent: 4,
		droppable: true,
		text: 'Folder 2-1'
	},
	{
		id: 6,
		parent: 5,
		droppable: false,
		text: 'File 2-1-1',
		data: {
			url: 'https://github.com/shunjizhan/react-folder-tree'
		}
	},
	{
		id: 7,
		parent: 0,
		droppable: false,
		text: 'react-folder-tree',
		data: {
			url: 'https://github.com/shunjizhan/react-folder-tree'
		}
	}
];

const getLastId = (treeData: NodeModel[]) => {
	const reversedArray = [...treeData].sort((a, b) => {
		if (a.id < b.id) {
			return 1;
		} else if (a.id > b.id) {
			return -1;
		}

		return 0;
	});

	if (reversedArray.length > 0) {
		return Number(reversedArray[0].id);
	}

	return 0;
};

const useStyles = makeStyles({
	root: {
		eight: '100%'
	},
	draggingSource: {
		opacity: 0.3
	},
	dropTarget: {
		backgroundColor: '#e8f0fe'
	}
});

const TreeViewDnD = () => {
	const [treeData, setTreeData] = useState<NodeModel<CustomData>[]>(sampleData);
	const handleDrop = (newTree: NodeModel<CustomData>[]) => setTreeData(newTree);
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);

	const [nodeDialog, setNodeDialog] = useState<
		NodeModel<CustomData> | undefined
	>(undefined);
	const [editEnabled, switchProps] = useSwitch('editSwitch');
	const styles = useStyles();

	const handleOpenDialog = () => {
		setDialogOpen(true);
	};

	const handleCloseDialog = () => {
		setDialogOpen(false);
	};

	const handleSubmit = (newNode: Omit<NodeModel<CustomData>, 'id'>) => {
		const lastId = getLastId(treeData) + 1;

		setTreeData([
			...treeData,
			{
				...newNode,
				id: lastId
			}
		]);

		setDialogOpen(false);
	};

	const handleDelete = (id: NodeModel['id']) => {
		const deleteIds = [
			id,
			...getDescendants(treeData, id).map(node => node.id)
		];
		const newTree = treeData.filter(node => !deleteIds.includes(node.id));

		setTreeData(newTree);
	};

	const editNode = (
		id: NodeModel['id'],
		editNode: Omit<NodeModel<CustomData>, 'id'>
	) => {
		const newTree = treeData.map(node => {
			if (node.id === id) {
				return {
					id: node.id,
					...editNode
				};
			}

			return node;
		});

		setTreeData(newTree);
		setDialogOpen(false);
		setNodeDialog(undefined);
	};

	const handleEdit = (id: NodeModel['id']) => {
		const node = treeData.find(i => i.id === id) ?? undefined;
		setDialogOpen(true);
		setNodeDialog(node);
	};

	return (
		<DndProvider backend={MultiBackend} options={getBackendOptions()}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Button onClick={handleOpenDialog} startIcon={<AddIcon />}>
					Add Bookmark
				</Button>
				<FormControlLabel control={<Switch {...switchProps} />} label="Edit" />
				{dialogOpen && (
					<AddDialog
						open={dialogOpen}
						nodeDialog={nodeDialog}
						tree={treeData}
						onClose={handleCloseDialog}
						onSubmit={handleSubmit}
						onEdit={editNode}
					/>
				)}
			</Box>
			<Tree
				tree={treeData}
				rootId={0}
				render={(node, { depth, isOpen, onToggle }) => (
					<CustomNode
						node={node}
						depth={depth}
						isOpen={isOpen}
						editEnabled={editEnabled}
						onToggle={onToggle}
						onDelete={handleDelete}
						onEdit={handleEdit}
					/>
				)}
				onDrop={handleDrop}
				canDrag={() => editEnabled}
				classes={{
					root: styles.root,
					draggingSource: styles.draggingSource,
					dropTarget: styles.dropTarget
				}}
			/>
		</DndProvider>
	);
};

export default TreeViewDnD;
