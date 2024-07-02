import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddProject from '../pages/AddProject';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Projects from '../pages/Projects';
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
			}
			// {
			// 	path: '/update-profile',
			// 	element: <UpdateProfile />
			// },
		]
	},
	{
		path: '/login',
		element: <Login />
	}
]);

export default router;
