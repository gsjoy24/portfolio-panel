import { Button, Form, Input, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import TextEditor from '../components/TextEditor';
import { useGetBlogQuery, useUpdateBlogMutation } from '../redux/features/auth/blogApi';

const UpdateBlog = () => {
	const { id } = useParams();
	const [form] = Form.useForm();
	const [content, setContent] = useState<string>('');
	const { data, isFetching } = useGetBlogQuery(id);
	const [updateBlog, { isLoading }] = useUpdateBlogMutation();
	const navigate = useNavigate();
	useEffect(() => {
		if (data?.data) {
			const { content } = data.data ?? {};
			setContent(content);
		}
	}, [data]);

	const onFinish = async (data: any) => {
		const modifiedInfo = { ...data, content };

		try {
			const res = await updateBlog({
				id,
				data: modifiedInfo
			}).unwrap();
			if (res?.success) {
				toast.success('Blog updated successfully!');
				navigate('/');
			} else {
				toast.error('Something went wrong!');
			}
		} catch (error: any) {
			toast.error(error?.data?.message || 'Something went wrong!');
		}
	};

	return isFetching ? (
		<Spin fullscreen size='large' tip='Please wait!' />
	) : (
		<div>
			<h1 className='text-4xl font-bold text-center mb-12'>Update Blog</h1>
			<Form form={form} onFinish={onFinish} initialValues={data?.data}>
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
							{isLoading ? <Spin /> : 'Update'}
						</Button>
					)}
				</Form.Item>
			</Form>
		</div>
	);
};

export default UpdateBlog;
