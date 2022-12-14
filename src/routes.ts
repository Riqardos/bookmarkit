type Routes = {
	home: string;
	login: string;
	bookmark: string;
	notFound: string;
};

export const routes: Routes = {
	home: '/',
	login: '/login',
	bookmark: '/bookmarks/:id',
	notFound: '/*'
};
