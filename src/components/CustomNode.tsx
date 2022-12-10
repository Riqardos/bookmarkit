import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { NodeModel } from '@minoru/react-dnd-treeview';
import { Box, IconButton, Link } from '@mui/material';
import { Delete } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

import { TypeIcon } from './TypeIcon';
import { CustomData } from './types';

type Props = {
	node: NodeModel<CustomData>;
	depth: number;
	isOpen: boolean;
	editEnabled: boolean;
	onToggle: (id: NodeModel['id']) => void;
	onDelete: (id: NodeModel['id']) => void;
	onEdit: (id: NodeModel['id']) => void;
};

export const CustomNode: React.FC<Props> = props => {
	const { id, droppable, data } = props.node;
	const { editEnabled } = props;
	const indent = props.depth * 3;

	const handleToggle = (e: React.MouseEvent) => {
		e.stopPropagation();
		props.onToggle(props.node.id);
	};

	return (
		<Box
			sx={{
				paddingInlineStart: indent,
				alignItem: 'center',
				justifyContent: 'space-between',
				display: 'flex',
				height: '32px'
			}}
		>
			<Box
				sx={{
					display: 'flex'
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
				<Box>
					<TypeIcon droppable={Boolean(droppable)} url={data?.url} />
				</Box>
				<Box
					sx={{
						paddingInlineStart: '8px',
						display: 'flex'
					}}
				>
					<Link
						href={data?.url}
						underline="none"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Typography variant="body2">{props.node.text}</Typography>
					</Link>
				</Box>
			</Box>

			{editEnabled && (
				<Box
					sx={{
						display: 'flex'
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
							width: '24px'
						}}
					>
						<IconButton size="small" onClick={() => props.onDelete(id)}>
							<Delete fontSize="small" />
						</IconButton>
					</Box>
					<Box
						sx={{
							alignItems: 'center',
							fontSize: 0,
							cursor: 'pointer',
							display: 'flex',
							height: '24px',
							justifyContent: 'center',
							width: '24px'
						}}
					>
						<IconButton size="small" onClick={() => props.onEdit(id)}>
							<EditIcon fontSize="small" />
						</IconButton>
					</Box>
				</Box>
			)}
		</Box>
	);
};
