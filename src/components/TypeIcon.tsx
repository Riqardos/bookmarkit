import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import { IconButton } from '@mui/material';

type Props = {
	droppable: boolean;
	fileType?: string;
	url?: string;
};

export const TypeIcon: React.FC<Props> = ({ droppable, url }) => {
	if (droppable) {
		return <FolderIcon />;
	}

	return (
		<IconButton disableRipple sx={{ padding: 0, width: '1em', height: '1em' }}>
			<img
				src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`}
				alt="logo"
			/>
		</IconButton>
	);
};
