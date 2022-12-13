import React, { useEffect, useState } from 'react';

import { Bookmark } from '../firebase';
import useLoggedInUser from '../../hooks/useLoggedInUser';

import useUserBookmarks from './useUserBookmarks';
import useGetAllBookmarks from './useGetAllBookmarks';

const useGetAllUserBookmarks = () => {
	const user = useLoggedInUser();
	const { data, loading: conjuctionsLoading, error } = useUserBookmarks();
	const { bookmarks, loading: bookmarksLoading } = useGetAllBookmarks();

	if (!user) return {};

	const result = bookmarks.filter(b => data.includes(b.id));
	console.log(result);
	const groupedBookmarks = result.reduce(
		(acc, bookmark) => {
			// reduce does not work for true/false
			const isCustom = bookmark.author === user.email ? 'custom' : 'shared';
			return {
				...acc,
				[isCustom]: acc[isCustom] ? [...acc[isCustom], bookmark] : [bookmark]
			};
		},
		{ custom: [] as Bookmark[], shared: [] as Bookmark[] }
	);

	return {
		customBookmarks: groupedBookmarks.custom,
		sharedBookmarks: groupedBookmarks.shared,
		loading: conjuctionsLoading || bookmarksLoading,
		error
	};
};

export default useGetAllUserBookmarks;
