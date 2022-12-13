import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import useLoggedInUser from '../../hooks/useLoggedInUser';
import { usersBookmarksDocument } from '../firebase';

const useUserBookmarks = () => {
	const user = useLoggedInUser();
	const [bookmarks, setBookmarks] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | undefined>(undefined);

	useEffect(() => {
		// Call onSnapshot() to listen to changes

		if (user?.uid) {
			const unsubscribe = onSnapshot(
				usersBookmarksDocument(user?.uid),
				doc => {
					setBookmarks(doc.exists() ? doc.data().bookmarksIds : []);
				},
				e => setError(e.message)
			);
			setLoading(false);

			return () => {
				unsubscribe();
			};
		}
	}, [user]);

	return {
		loading,
		data: bookmarks,
		error
	};
};

export default useUserBookmarks;
