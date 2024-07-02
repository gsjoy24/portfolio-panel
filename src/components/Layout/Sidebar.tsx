import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { FaBloggerB, FaListAlt, FaUser } from 'react-icons/fa';
import { GoProjectTemplate } from 'react-icons/go';
import { HiLogout } from 'react-icons/hi';
import { IoMdHome } from 'react-icons/io';
import { IoAdd } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { logOut, selectCurrentUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Sidebar = () => {
	const user = useAppSelector(selectCurrentUser);
	const dispatch = useAppDispatch();

	let sidebarItems = [
		{
			key: '1',
			icon: <IoMdHome />,
			label: <NavLink to='/'>Home</NavLink>
		},
		{
			key: '2',
			icon: <FaUser />,
			label: <NavLink to='/update-profile'>Update Profile</NavLink>
		},
		{
			key: '3',
			icon: <GoProjectTemplate />,
			label: <NavLink to='/projects'>Projects</NavLink>
		},
		{
			key: '4',
			icon: <IoAdd />,
			label: <NavLink to='/add-project'>Add Project</NavLink>
		},
		{
			key: '5',
			icon: <FaBloggerB />,
			label: <NavLink to='/blogs'>Blogs</NavLink>
		},
		{
			key: '6',
			icon: <IoAdd />,
			label: <NavLink to='/add-blog'>Add Blog</NavLink>
		}
	];

	return (
		<Sider breakpoint='lg' collapsedWidth='0' className='min-h-[100vh]'>
			<div style={{ height: '2rem', textAlign: 'center', color: 'white', marginTop: '20px' }}>
				<h1 className='font-semibold text-lg'>Dream Gadgets</h1>
			</div>
			<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']} items={sidebarItems} />
			<div className='absolute bottom-5 p-2 w-full text-white '>
				<Button
					className='w-full text-white flex justify-center  items-center gap-2'
					onClick={() => dispatch(logOut())}
					type='dashed'
				>
					Logout <HiLogout />
				</Button>
			</div>
		</Sider>
	);
};

export default Sidebar;
