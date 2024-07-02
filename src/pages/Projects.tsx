import { Button, Col, Row, Spin, Table, TableColumnsType } from 'antd';
import { Link } from 'react-router-dom';
import { useGetProjectsQuery } from '../redux/features/auth/projectApi';
import { TProject } from '../types';

const Projects = () => {
	const { data, isLoading, isFetching } = useGetProjectsQuery({});
	let dataSource;
	if (data) {
		dataSource = data.data.map((project: TProject) => ({
			key: project?._id,
			title: project?.title
		}));
	}
	const columns: TableColumnsType<any> = [
		{
			title: 'Project',
			dataIndex: 'title'
		},
		{
			title: 'Actions',
			render: (record: any) => (
				<Row gutter={16}>
					<Col>
						<Link to={`/update-project/${record.key}`}>
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

	return isLoading ? (
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

export default Projects;
