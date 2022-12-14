import { setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { validate } from 'uuid';

import useLoggedInUser from '../../hooks/useLoggedInUser';
import { useTranslation } from '../../hooks/useTranslation';
import { usersBookmarksDocument } from '../firebase';

import useGetAllBookmarks from './useGetAllBookmarks';
import useUserBookmarks from './useUserBookmarks';

const useSubscribeToBookmark = () => {
	const t = useTranslation();
	const user = useLoggedInUser();
	const { data } = useUserBookmarks();
	const { bookmarks } = useGetAllBookmarks();
	const [submitError, setSubmitError] = useState<string | undefined>();

	const handleSubmit = async ({ bookmarkUUID }: { bookmarkUUID: string }) => {
		if (!user) {
			setSubmitError(t('notSignedIn'));
			return;
		}

		if (!validate(bookmarkUUID)) {
			setSubmitError(t('invalidUUID'));
			return;
		}

		const existingBookmark = bookmarks.find(b => b.id === bookmarkUUID);
		if (!existingBookmark || !existingBookmark.isPublic) {
			setSubmitError(t('nonExistingUUID'));
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
