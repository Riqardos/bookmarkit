import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyIdToClipboard = ({ id }: { id: string }) => (
	<CopyToClipboard text={id}>
		<Button size="small">
			<ContentCopyIcon />
		</Button>
	</CopyToClipboard>
);

export default CopyIdToClipboard;
