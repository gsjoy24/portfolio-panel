import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import UpdateProfile from '../pages/UpdateProfile';

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
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	}
]);

export default router;
