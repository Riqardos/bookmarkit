import { User } from 'firebase/auth';
import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import useLoggedInUser from '../hooks/useLoggedInUser';
import Bookmark from '../pages/Bookmark';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import { routes } from '../routes';

const ProtectedRoute = ({ user }: { user: User | undefined }) =>
	!user ? <Navigate to={routes.login} replace /> : <Outlet />;

const AppRoutes = () => {
	const user = useLoggedInUser();

	return (
		<Routes>
			<Route element={<ProtectedRoute user={user} />}>
				<Route path={routes.bookmark} element={<Bookmark />} />
				<Route path={routes.home} element={<Home />} />
				<Route path={routes.notFound} element={<NotFound />} />
			</Route>
			{user && <Route path="/login" element={<Home />} />}
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};
export default AppRoutes;
