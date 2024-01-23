import { error } from '@sveltejs/kit';
import { projects, type Project } from '../data';

export function load({ params }) {
	const project = projects.find((project: Project) => project.slug === params.slug);

	if (!project) throw error(404);

	return {
		project
	};
}
