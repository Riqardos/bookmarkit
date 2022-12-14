import { Home, Login, Bookmark } from '@mui/icons-material';
import { Routes, Route } from 'react-router-dom';

import useLoggedInUser from '../hooks/useLoggedInUser';
import NewHome from '../pages/NewHome';
import NotFound from '../pages/NotFound';
import { routes } from '../routes';

const AppRoutes = () => {
	const user = useLoggedInUser();
	return (
		<Routes>
			<Route path={routes.home} element={<NewHome />} />
			<Route path={routes.home2} element={<Home />} />
			{!user && <Route path="/login" element={<Login />} />}
			<Route path={routes.bookmark} element={<Bookmark />} />
			<Route path={routes.notFound} element={<NotFound />} />
		</Routes>
	);
};
export default AppRoutes;
