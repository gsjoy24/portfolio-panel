import { useGetProfileQuery } from '../redux/features/auth/userApi';

const UpdateProfile = () => {
	const { data } = useGetProfileQuery({});
	return <div></div>;
};

export default UpdateProfile;
