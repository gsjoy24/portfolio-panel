import { Button, Form, Input, Spin } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import TextEditor from '../components/TextEditor';
import { usePostBlogMutation } from '../redux/features/auth/blogApi';

const AddBlog = () => {
	const [form] = Form.useForm();
	const [content, setContent] = useState<string>('');
	const [postBlog, { isLoading }] = usePostBlogMutation();
	const navigate = useNavigate();

	const onFinish = async (data: any) => {
		const modifiedInfo = { ...data, content };

		try {
			const res = await postBlog(modifiedInfo).unwrap();
			if (res?.success) {
				toast.success('Blog posted successfully!');
				navigate('/blogs');
			} else {
				toast.error('Something went wrong!');
			}
		} catch (error: any) {
			toast.error((error as any)?.data?.message || 'Something went wrong!');
		}
	};

	return (
		<div>
			<h1 className='text-4xl font-bold text-center mb-12'>Post Blog</h1>
			<Form form={form} onFinish={onFinish}>
				<label htmlFor='title'>Title</label>
				<Form.Item name='title'>
					<Input className='p-3 mt-2' placeholder='Title' />
				</Form.Item>

				<label htmlFor='image'>Image</label>
				<Form.Item name='image'>
					<Input className='p-3 mt-2' placeholder='Image' />
				</Form.Item>

				<label>Content</label>
				<TextEditor content={content} setContent={setContent} />
				<Form.Item shouldUpdate>
					{() => (
						<Button className='p-2 h-max mt-5' type='dashed' htmlType='submit' block>
							{isLoading ? <Spin /> : 'Post'}
						</Button>
					)}
				</Form.Item>
			</Form>
		</div>
	);
};

export default AddBlog;
