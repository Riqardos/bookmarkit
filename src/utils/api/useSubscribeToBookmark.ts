import { setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { validate } from 'uuid';

import useLoggedInUser from '../../hooks/useLoggedInUser';
import { usersBookmarksDocument } from '../firebase';

import useGetAllBookmarks from './useGetAllBookmarks';
import useUserBookmarks from './useUserBookmarks';

const useSubscribeToBookmark = () => {
	const user = useLoggedInUser();
	const { data } = useUserBookmarks();
	const { bookmarks, loading } = useGetAllBookmarks();
	const [submitError, setSubmitError] = useState<string | undefined>();

	const handleSubmit = async ({ bookmarkUUID }: { bookmarkUUID: string }) => {
		if (!user) {
			setSubmitError('not_signed_in');
			return;
		}

		if (!validate(bookmarkUUID)) {
			setSubmitError('invalid_uuid');
			return;
		}

		const existingBookmark = bookmarks.find(b => b.id === bookmarkUUID);
		if (!existingBookmark || !existingBookmark.isPublic) {
			setSubmitError('invalid_uuid');
			return;
		}

		try {
			await setDoc(usersBookmarksDocument(user?.uid), {
				bookmarksIds: [...data, bookmarkUUID]
			});
		} catch (err) {
			setSubmitError((err as { message?: string })?.message ?? 'unknown_error');
		}
	};

	return { submitError, handleSubmit };
};

export default useSubscribeToBookmark;