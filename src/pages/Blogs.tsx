import { Button, Col, Row, Spin, Table, TableColumnsType } from 'antd';
import { Link } from 'react-router-dom';
import { useGetBlogsQuery } from '../redux/features/auth/blogApi';
import { TBlog } from '../types';

const Blogs = () => {
	const { data, isFetching } = useGetBlogsQuery({});
	let dataSource;
	if (data) {
		dataSource = data.data.map((blog: TBlog) => ({
			key: blog?._id,
			title: blog?.title
		}));
	}
	const columns: TableColumnsType<any> = [
		{
			title: 'Title',
			dataIndex: 'title'
		},
		{
			title: 'Actions',
			render: (record: any) => (
				<Row gutter={16}>
					<Col>
						<Link to={`/update-blog/${record.key}`}>
							<Button type='primary'>Edit</Button>
						</Link>
					</Col>
					<Col>
						<Button type='primary' danger>
							Delete
						</Button>
					</Col>
				</Row>
			)
		}
	];
	return isFetching ? (
		<Spin fullscreen size='large' tip='Please wait!' />
	) : (
		<>
			<h1 className='text-4xl font-bold text-center mb-12'>Projects</h1>
			<Table
				columns={columns as TableColumnsType<any>}
				dataSource={dataSource}
				scroll={{ x: 800 }}
				loading={isFetching}
			/>
		</>
	);
};

export default Blogs;
