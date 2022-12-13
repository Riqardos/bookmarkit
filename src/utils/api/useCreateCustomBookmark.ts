import React, { useState } from 'react';
import { setDoc } from 'firebase/firestore';
import uuid from 'react-uuid';

import useLoggedInUser from '../../hooks/useLoggedInUser';
import { bookmarksDocument, usersBookmarksDocument } from '../firebase';

import useUserBookmarks from './useUserBookmarks';

const useCreateCustomBookmark = () => {
	const [submitError, setSubmitError] = useState<string>();
	const { data } = useUserBookmarks();
	const user = useLoggedInUser();

	const handleSubmit = async ({
		title,
		description,
		imageUrl,
		isPublic
	}: {
		title: string;
		description: string;
		imageUrl?: string;
		isPublic: boolean;
	}) => {
		if (!user?.email) {
			setSubmitError('not_signed_in');
			return;
		}

		try {
			const bookmarkUUID = uuid();
			await setDoc(usersBookmarksDocument(user?.uid), {
				bookmarksIds: [...data, bookmarkUUID]
			});
			await setDoc(bookmarksDocument(bookmarkUUID), {
				id: bookmarkUUID,
				title,
				description,
				imageUrl,
				isPublic,
				author: user.email,
				bookmarks: [
					{
						id: 1,
						parent: 0,
						droppable: true,
						text: 'Example folder'
					},
					{
						id: 2,
						parent: 1,
						droppable: false,
						text: 'Example bookmark',
						data: {
							url: 'https://github.com/shunjizhan/react-folder-tree'
						}
					}
				]
			});
		} catch (err) {
			setSubmitError((err as { message?: string })?.message ?? 'unknown_error');
		}
	};

	return { handleSubmit, submitError };
};

export default useCreateCustomBookmark;
