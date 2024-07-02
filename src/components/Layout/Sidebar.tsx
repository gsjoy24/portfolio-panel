import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { FaListAlt, FaUser } from 'react-icons/fa';
import { HiLogout } from 'react-icons/hi';
import { IoMdHome } from 'react-icons/io';
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
			icon: <IoMdHome />,
			label: <NavLink to='/products'>Home</NavLink>
		},
		{
			key: '4',
			icon: <IoMdHome />,
			label: <NavLink to='/products'>Home</NavLink>
		},
		{
			key: '5',
			icon: <IoMdHome />,
			label: <NavLink to='/products'>Home</NavLink>
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
