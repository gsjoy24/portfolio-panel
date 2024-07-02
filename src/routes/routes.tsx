import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddBlog from '../pages/AddBlog';
import AddProject from '../pages/AddProject';
import Blogs from '../pages/Blogs';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Projects from '../pages/Projects';
import UpdateBlog from '../pages/UpdateBlog';
import UpdateProfile from '../pages/UpdateProfile';
import UpdateProject from '../pages/UpdateProject';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/update-profile',
				element: <UpdateProfile />
			},
			{
				path: '/projects',
				element: <Projects />
			},
			{
				path: '/add-project',
				element: <AddProject />
			},
			{
				path: '/update-project/:id',
				element: <UpdateProject />
			},
			{
				path: '/add-blog',
				element: <AddBlog />
			},
			{
				path: '/blogs',
				element: <Blogs />
			},
			{
				path: '/update-blog/:id',
				element: <UpdateBlog />
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	}
]);

export default router;
