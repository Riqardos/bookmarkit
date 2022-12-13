import { Button, Link } from '@mui/material';
import { onSnapshot, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';

import useLoggedInUser from '../hooks/useLoggedInUser';
import { bookmarksDocument, usersBookmarksDocument } from '../utils/firebase';

const Home = () => {
	const user = useLoggedInUser();
	const [bookmarks, setBookmarks] = useState<string[]>([]);
	const [_submitError, setSubmitError] = useState<string>();
	const [newBookmark, _setBookmark] = useState<string>();

	useEffect(() => {
		// Call onSnapshot() to listen to changes
		if (user?.uid) {
			const unsubscribe = onSnapshot(usersBookmarksDocument(user?.uid), doc => {
				setBookmarks(doc.exists() ? doc.data().bookmarksIds : []);
			});

			return () => {
				unsubscribe();
			};
		}
	}, [user]);

	// Submit handler
	const handleSubmit = async () => {
		if (!user?.email) {
			setSubmitError('not_signed_in');
			return;
		}
	};

	return (
		<>
			<Button onClick={handleSubmit}>Submit</Button>
			{bookmarks.map(i => (
				<Link href={`http://localhost:3000/bookmarks/${i}`} key={i}>
					{i}
				</Link>
			))}
		</>
	);
};

export default Home;
