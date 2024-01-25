import { projects, type Project } from './data';

export function load() {
	return {
		games: projects
			.filter((project: Project) => project.type === 'game')
			.map((project: Project) => ({
				slug: project.slug,
				title: project.title
			})),
		websites: projects
			.filter((project: Project) => project.type === 'website')
			.map((project: Project) => ({
				slug: project.slug,
				title: project.title
			}))
	};
}
