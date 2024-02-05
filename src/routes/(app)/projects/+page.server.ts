import { projects, type Project } from './data';

export function load() {
	return {
		projects: projects.map((project: Project) => ({
			slug: project.slug,
			title: project.title,
			type: project.type
		}))
	};
}
