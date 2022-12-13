import React from 'react';

import useUserBookmarks from '../../utils/api/useUserBookmarks';

const SharedBookmarks = () => {
	const { data, error, loading } = useUserBookmarks();
	if (error) {
		return <span>Error</span>;
	}

	if (loading) {
		return <span>loading</span>;
	}

	return <span>{data}</span>;
};
export default SharedBookmarks;
