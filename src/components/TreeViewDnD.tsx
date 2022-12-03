import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import {
	Tree,
	NodeModel,
	MultiBackend,
	getBackendOptions
} from '@minoru/react-dnd-treeview';

import { CustomNode } from './CustomNode';
import { CustomData } from './types';
import styles from './App.module.css';

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
		url: 'https://github.com/shunjizhan/react-folder-tree'
	},
	{
		id: 3,
		parent: 1,
		droppable: false,
		text: 'File 1-2',
		url: 'https://github.com/shunjizhan/react-folder-tree'
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
		url: 'https://github.com/shunjizhan/react-folder-tree'
	},
	{
		id: 7,
		parent: 0,
		droppable: false,
		text: 'react-folder-tree',
		url: 'https://github.com/shunjizhan/react-folder-tree'
	}
];

const TreeViewDnD = () => {
	const [treeData, setTreeData] = useState<NodeModel[]>(sampleData);
	const handleDrop = (newTree: NodeModel[]) => setTreeData(newTree);

	return (
		<DndProvider backend={MultiBackend} options={getBackendOptions()}>
			<Tree
				tree={treeData}
				rootId={0}
				render={(node, { depth, isOpen, onToggle }) => (
					<CustomNode
						node={node}
						depth={depth}
						isOpen={isOpen}
						onToggle={onToggle}
					/>
				)}
				onDrop={handleDrop}
				// styles={{
				// 	height: '100%'
				// }}
				classes={{
					root: styles.treeRoot,
					draggingSource: styles.draggingSource,
					dropTarget: styles.dropTarget
				}}
			/>
		</DndProvider>
	);
};

export default TreeViewDnD;
