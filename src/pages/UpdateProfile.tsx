import { Button, Form, Input, Spin } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useGetProfileQuery, useUpdateProfileMutation } from '../redux/features/auth/userApi';

const UpdateProfile = () => {
	const { data, isFetching } = useGetProfileQuery({});
	const [updateProfile, { isLoading }] = useUpdateProfileMutation();
	const { socialLinks, contact, ...restData } = data?.data || {};
	const [form] = Form.useForm();

	const navigate = useNavigate();

	const onFinish = async (info: any) => {
		const modifiedInfo = {
			...info,
			socialLinks: {
				facebook: info.facebook,
				linkedin: info.linkedin,
				youtube: info.youtube,
				x: info.x,
				github: info.github
			},
			contact: {
				phone: info.phone,
				email: info.email
			}
		};
		try {
			const res = await updateProfile({ id: data?.data?._id, data: modifiedInfo }).unwrap();
			if (res?.success) {
				toast.success('Profile updated successfully!');
				navigate('/');
			} else {
				toast.error('Something went wrong!');
			}
		} catch (error: any) {
			// show error message
			toast.error(error?.data?.message || 'Something went wrong!');
		}
	};

	return isFetching ? (
		<Spin fullscreen size='large' tip='Please wait!' />
	) : (
		<div className='mx-4'>
			<Form form={form} onFinish={onFinish} initialValues={restData}>
				<h1 className='text-4xl font-bold text-center mb-12'>Update Profile</h1>
				<label htmlFor='name'>Name</label>
				<Form.Item name='name'>
					<Input className='p-3 mt-2' placeholder='Name' />
				</Form.Item>
				<label htmlFor='designation'>Designation</label>
				<Form.Item name='designation'>
					<Input className='p-3 mt-2' placeholder='Designation' />
				</Form.Item>
				<label htmlFor='introduction'>Introduction</label>
				<Form.Item name='introduction'>
					<TextArea rows={6} placeholder='Introduction' />
				</Form.Item>
				<label htmlFor='profilePicture'>Profile Picture</label>
				<Form.Item name='profilePicture'>
					<Input className='p-3 mt-2' placeholder='Profile Picture' />
				</Form.Item>
				<label htmlFor='frontEndSkills'>Front-End Skills</label>
				<Form.Item name='frontEndSkills'>
					<Input className='p-3 mt-2' placeholder='Front-End Skills' />
				</Form.Item>
				<label htmlFor='backEndSkills'>Back-End Skills</label>
				<Form.Item name='backEndSkills'>
					<Input className='p-3 mt-2' placeholder='Back-End Skills' />
				</Form.Item>
				<label htmlFor='tools'>Tools</label>
				<Form.Item name='tools'>
					<Input className='p-3 mt-2' placeholder='Tools' />
				</Form.Item>
				<Form.Item name='resumeLink'>
					<Input className='p-3 mt-2' placeholder='Resume Link' />
				</Form.Item>
			</Form>

			<Form form={form} onFinish={onFinish} initialValues={socialLinks}>
				<h2 className='text-2xl font-bold text-center mb-6'>Social Links</h2>
				<label htmlFor='facebook'>Facebook</label>
				<Form.Item name='facebook'>
					<Input className='p-3 mt-2' placeholder='https://facebook.com/' />
				</Form.Item>
				<label htmlFor='linkedin'>LinkedIn</label>
				<Form.Item name='linkedin'>
					<Input className='p-3 mt-2' placeholder='https://linkedin.com/in/' />
				</Form.Item>
				<label htmlFor='youtube'>YouTube</label>
				<Form.Item name='youtube'>
					<Input className='p-3 mt-2' placeholder='https://youtube.com/' />
				</Form.Item>
				<label htmlFor='x'>X</label>
				<Form.Item name='x'>
					<Input className='p-3 mt-2' placeholder='https://x.com/' />
				</Form.Item>
				<label htmlFor='github'>GitHub</label>
				<Form.Item name='github'>
					<Input className='p-3 mt-2' placeholder='https://github.com/' />
				</Form.Item>
			</Form>

			<Form form={form} onFinish={onFinish} initialValues={contact}>
				<h2 className='text-2xl font-bold text-center mb-6'>Contact</h2>
				<label htmlFor='phone'>Phone</label>
				<Form.Item name='phone'>
					<Input className='p-3 mt-2' placeholder='Phone' />
				</Form.Item>
				<label htmlFor='email'>Email</label>
				<Form.Item name='email'>
					<Input className='p-3 mt-2' placeholder='Email' />
				</Form.Item>
				<Form.Item shouldUpdate>
					{() => (
						<Button className='p-2 h-max' type='dashed' htmlType='submit' block>
							{isLoading ? <Spin /> : 'Update'}
						</Button>
					)}
				</Form.Item>
			</Form>
		</div>
	);
};

export default UpdateProfile;
