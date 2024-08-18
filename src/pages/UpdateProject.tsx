import { Button, Form, Input, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import TextEditor from '../components/TextEditor';
import { useGetProjectQuery, useUpdateProjectMutation } from '../redux/features/auth/projectApi';

const UpdateProject = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [description, setDescription] = useState<string>('');
	const { data, isFetching } = useGetProjectQuery(id);
	const [updateProject, { isLoading }] = useUpdateProjectMutation();

	useEffect(() => {
		if (data?.data) {
			const { description } = data.data;
			setDescription(description);
		}
	}, [data]);

	const onFinish = async (data: any) => {
		const modifiedInfo = { ...data, description };

		try {
			const res = await updateProject({
				id,
				data: modifiedInfo
			}).unwrap();
			if (res?.success) {
				toast.success('Project updated successfully!');
				navigate('/projects');
			} else {
				toast.error('Something went wrong!');
			}
		} catch (error: any) {
			toast.error((error as any)?.data?.message || 'Something went wrong!');
		}
	};

	return isFetching ? (
		<Spin fullscreen size='large' tip='Please wait!' />
	) : (
		<div>
			<h1 className='text-4xl font-bold text-center mb-12'>Add Project</h1>
			<Form form={form} onFinish={onFinish} initialValues={data?.data}>
				<label htmlFor='title'>Title</label>
				<Form.Item name='title'>
					<Input className='p-3 mt-2' placeholder='Phone' />
				</Form.Item>

				<label htmlFor='frontEndTech'>Frontend Tech</label>
				<Form.Item name='frontEndTech'>
					<Input className='p-3 mt-2' placeholder='Frontend Tech' />
				</Form.Item>

				<label htmlFor='backEndTech'>Backend Tech</label>
				<Form.Item name='backEndTech'>
					<Input className='p-3 mt-2' placeholder='Backend Tech' />
				</Form.Item>

				<label htmlFor='frontEndRepo'>Frontend Repo</label>
				<Form.Item name='frontEndRepo'>
					<Input className='p-3 mt-2' placeholder='Frontend Repo' />
				</Form.Item>

				<label htmlFor='backEndRepo'>Backend Repo</label>
				<Form.Item name='backEndRepo'>
					<Input className='p-3 mt-2' placeholder='Backend Repo' />
				</Form.Item>

				<label htmlFor='liveLink'>Live Link</label>
				<Form.Item name='liveLink'>
					<Input className='p-3 mt-2' placeholder='Live Link' />
				</Form.Item>

				<label htmlFor='image'>Image</label>
				<Form.Item name='image'>
					<Input className='p-3 mt-2' placeholder='Image' />
				</Form.Item>

				<label htmlFor='duration'>Duration</label>
				<Form.Item name='duration'>
					<Input className='p-3 mt-2' placeholder='Duration' />
				</Form.Item>

				<label>Description</label>
				<TextEditor content={description} setContent={setDescription} />
				<Form.Item shouldUpdate>
					{() => (
						<Button className='p-2 h-max mt-5' type='dashed' htmlType='submit' block>
							{isLoading ? <Spin /> : 'Update'}
						</Button>
					)}
				</Form.Item>
			</Form>
		</div>
	);
};

export default UpdateProject;
