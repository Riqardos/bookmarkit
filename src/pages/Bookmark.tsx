import React, { useEffect, useState } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import { onSnapshot, setDoc } from 'firebase/firestore';

import { useSwitch } from '../hooks/useSwitch';
import { CustomNode } from '../components/CustomNode';
import { AddDialog } from '../components/AddDialog';
import { CustomData } from '../components/types';
import { bookmarksDocument, Bookmark as BookmarkType } from '../utils/firebase';
import { routes } from '../routes';

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
		height: '100%',
		width: '100%'
	},
	draggingSource: {
		opacity: 0.3
	},
	dropTarget: {
		backgroundColor: '#e8f0fe'
	}
});

const Bookmark = () => {
	const { id } = useParams();
	const [treeData, setTreeData] = useState<NodeModel<CustomData>[]>([]);
	const [data, setData] = useState<BookmarkType>();
	const handleDrop = async (newTree: NodeModel<CustomData>[]) => {
		updateTree(newTree);
	};
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);

	const [nodeDialog, setNodeDialog] = useState<
		NodeModel<CustomData> | undefined
	>(undefined);
	const [editEnabled, switchProps] = useSwitch('editSwitch');
	const styles = useStyles();
	const navigate = useNavigate();

	useEffect(() => {
		// Call onSnapshot() to listen to changes
		if (id) {
			const unsubscribe = onSnapshot(bookmarksDocument(id), doc => {
				if (doc.exists()) {
					setTreeData(doc.data().bookmarks);
					setData(doc.data());
				} else {
					navigate(routes.notFound);
				}
			});

			return () => {
				unsubscribe();
			};
		}
	}, [id]);

	const updateTree = (newTreeData: NodeModel<CustomData>[]) => {
		if (id) {
			setDoc(bookmarksDocument(id), { ...data, bookmarks: newTreeData });
		}
	};

	const handleOpenDialog = () => {
		setDialogOpen(true);
	};

	const handleCloseDialog = () => {
		setDialogOpen(false);
	};

	const handleSubmit = (newNode: Omit<NodeModel<CustomData>, 'id'>) => {
		const lastId = getLastId(treeData) + 1;
		const newTree = [
			...treeData,
			{
				...newNode,
				id: lastId
			}
		];

		// setTreeData(newTree);
		setDialogOpen(false);
		updateTree(newTree);
	};

	const handleDelete = (id: NodeModel['id']) => {
		const deleteIds = [
			id,
			...getDescendants(treeData, id).map(node => node.id)
		];
		const newTree = treeData.filter(node => !deleteIds.includes(node.id));

		// setTreeData(newTree);
		updateTree(newTree);
	};

	const editNode = (
		nodeId: NodeModel['id'],
		editNode: Omit<NodeModel<CustomData>, 'id'>
	) => {
		const newTree = treeData.map(node => {
			if (node.id === nodeId) {
				return {
					id: node.id,
					...editNode
				};
			}

			return node;
		});
		// setTreeData(newTree);
		updateTree(newTree);
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
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '50%',
					height: '100%'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%'
					}}
				>
					<Button onClick={handleOpenDialog} startIcon={<AddIcon />}>
						Add Bookmark
					</Button>
					<FormControlLabel
						control={<Switch {...switchProps} />}
						label="Edit"
					/>
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
			</Box>
		</DndProvider>
	);
};

export default Bookmark;
