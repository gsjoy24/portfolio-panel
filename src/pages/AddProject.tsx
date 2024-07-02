import { Button, Form, Input, Spin } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import TextEditor from '../components/TextEditor';
import { useAddProjectMutation } from '../redux/features/auth/projectApi';
const AddProject = () => {
	const [form] = Form.useForm();
	const [content, setContent] = useState<string>('');
	const [addProject, { isLoading }] = useAddProjectMutation();
	const navigate = useNavigate();

	const onFinish = async (data: any) => {
		const modifiedInfo = { ...data, description: content };

		try {
			const res = await addProject(modifiedInfo).unwrap();
			if (res?.success) {
				toast.success('Project added successfully!');
				navigate('/projects');
			} else {
				toast.error('Something went wrong!');
			}
		} catch (error: any) {
			// console.log({ error });
			// show error message
			toast.error((error as any)?.data?.message || 'Something went wrong!');
		}
	};

	return (
		<div>
			<h1 className='text-4xl font-bold text-center mb-12'>Add Project</h1>
			<Form form={form} onFinish={onFinish}>
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
				<TextEditor content={content} setContent={setContent} />
				<Form.Item shouldUpdate>
					{() => (
						<Button className='p-2 h-max mt-5' type='dashed' htmlType='submit' block>
							{isLoading ? <Spin /> : 'Add'}
						</Button>
					)}
				</Form.Item>
			</Form>
		</div>
	);
};

export default AddProject;
