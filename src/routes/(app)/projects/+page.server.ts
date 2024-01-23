import { projects, type Project } from './data';

export function load() {
	return {
		games: projects
			.filter((project: Project) => project.type === 'game')
			.map((project: Project) => ({
				slug: project.slug,
				title: project.title
			})),
		webs: projects
			.filter((project: Project) => project.type === 'web')
			.map((project: Project) => ({
				slug: project.slug,
				title: project.title
			}))
	};
}
