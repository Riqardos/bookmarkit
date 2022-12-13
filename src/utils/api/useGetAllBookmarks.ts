import React, { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';

import { Bookmark, bookmarksCollection } from '../firebase';
import useLoggedInUser from '../../hooks/useLoggedInUser';

import useUserBookmarks from './useUserBookmarks';

const useGetAllBookmarks = () => {
	const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Call onSnapshot() to listen to changes
		const unsubscribe = onSnapshot(bookmarksCollection, snapshot => {
			setBookmarks(snapshot.docs.map(doc => doc.data()));
		});

		setLoading(false);

		return () => {
			unsubscribe();
		};
	}, []);

	return {
		bookmarks,
		loading
	};
};

export default useGetAllBookmarks;
