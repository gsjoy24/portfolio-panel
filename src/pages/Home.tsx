import { useGetProfileQuery } from '../redux/features/auth/userApi';

const Home = () => {
	const { data } = useGetProfileQuery({});
	return (
		<div>
			<h1 className='text-[30px] font-semibold'>Current Data</h1>
			<div className='text-[17px] flex flex-col gap-2 text-wrap'>
				<p>
					<strong>Name:</strong> {data?.data?.name}
				</p>
				<p>
					<strong>Designation:</strong> {data?.data?.designation}
				</p>
				<p>
					<strong>Introduction:</strong> {data?.data?.introduction}
				</p>
				<p className='text-wrap w-full overflow-hidden'>
					<strong>Profile Picture:</strong> {data?.data?.profilePicture}
				</p>

				<p>
					<strong>Front-End Skills:</strong> {data?.data?.frontEndSkills}
				</p>
				<p>
					<strong>Back-End Skills:</strong> {data?.data?.backEndSkills}
				</p>
				<p>
					<strong>Tools:</strong> {data?.data?.tools}
				</p>
				<p>
					<strong>Social Links:</strong>
					<ul>
						<li>
							<strong>GitHub:</strong> {data?.data?.socialLinks.github}
						</li>
						<li>
							<strong>LinkedIn:</strong> {data?.data?.socialLinks.linkedin}
						</li>
						<li>
							<strong>Facebook:</strong> {data?.data?.socialLinks.facebook}
						</li>
						<li>
							<strong>YouTube:</strong> {data?.data?.socialLinks.youtube}
						</li>
						<li>
							<strong>X:</strong> {data?.data?.socialLinks.x}
						</li>
					</ul>
				</p>
				<p>
					<strong>Contact:</strong>
					<ul>
						<li>
							<strong>Phone:</strong> {data?.data?.contact.phone}
						</li>
						<li>
							<strong>Email:</strong> {data?.data?.contact.email}
						</li>
					</ul>
				</p>
				<p className='text-wrap w-full overflow-hidden'>
					<strong>Resume Link:</strong> {data?.data?.resumeLink}
				</p>
			</div>
		</div>
	);
};

export default Home;
