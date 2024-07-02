export type TBlog = {
	_id: string;
	title: string;
	content: string;
	image: string;
	publicationDate?: Date;
};

export type TProfile = {
	name: string;
	designation: string;
	introduction: string;
	profilePicture: string;
	frontEndSkills: string;
	backEndSkills: string;
	tools: string;
	socialLinks: {
		linkedin: string;
		github: string;
		x: string;
		facebook: string;
		youtube: string;
	};
	contact: {
		phone: string;
		email: string;
	};
	resumeLink: string;
};

export type TProject = {
	_id: string;
	title: string;
	description: string;
	frontEndTech: string;
	backEndTech: string;
	frontEndRepo: string;
	backEndRepo: string;
	liveLink: string;
	image: string;
	duration: string;
};
