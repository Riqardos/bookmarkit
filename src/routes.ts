type Routes = {
	home: string;
	home2: string;
	login: string;
	bookmark: string;
	notFound: string;
};

export const routes: Routes = {
	home: '/',
	home2: '/home',
	login: '/login',
	bookmark: '/bookmarks/:id',
	notFound: '/*'
};
