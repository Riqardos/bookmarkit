import React from 'react';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { NodeModel } from '@minoru/react-dnd-treeview';
import { Box, IconButton } from '@mui/material';

import { CustomData } from './types';
import { TypeIcon } from './TypeIcon';

type Props = {
	node: any;
	depth: number;
	isOpen: boolean;
	onToggle: (id: NodeModel['id']) => void;
};

export const CustomNode: React.FC<Props> = props => {
	const { droppable, data, url } = props.node;

	const handleToggle = (e: React.MouseEvent) => {
		e.stopPropagation();
		props.onToggle(props.node.id);
	};

	return (
		<Box
			sx={{
				paddingInlineStart: 10,
				alignItem: 'center',
				display: 'grid',
				gridTemplateColumns: 'auto auto 1fr auto',
				height: '32px',
				paddingInlineEnd: '8px'
			}}
		>
			<Box
				sx={{
					alignItems: 'center',
					fontSize: 0,
					cursor: 'pointer',
					display: 'flex',
					height: '24px',
					justifyContent: 'center',
					width: '24px',
					transition: 'transform linear .1s',
					transform: props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
				}}
			>
				{props.node.droppable && (
					<IconButton onClick={handleToggle}>
						<ArrowRightIcon />
					</IconButton>
				)}
			</Box>
			<div>
				<TypeIcon
					droppable={Boolean(droppable)}
					fileType={data?.fileType}
					url={url}
				/>
			</div>
			<Box
				sx={{
					paddingInlineStart: '8px'
				}}
			>
				<Typography variant="body2">{props.node.text}</Typography>
			</Box>
		</Box>
	);
};
