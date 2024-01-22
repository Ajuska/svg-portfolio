export interface Project {
	slug: string;
	title: string;
	tech: string[];
	role: string[];
	links: { name: string; href: string }[];
	image: string;
	description: string;
	type: 'game' | 'web';
}

export const projects: Project[] = [
	{
		slug: 'game',
		title: '1st game ever',
		tech: ['unity'],
		role: ['director', 'CEO'],
		links: [{ name: 'abc', href: 'https://abc.com' }],
		image: '',
		description: 'Evrything went well! Made my mama proud.',
		type: 'game'
	},
	{
		slug: 'cake',
		title: 'This was a triumph',
		tech: ['kitchen robot', 'spatula'],
		role: ['chef'],
		links: [],
		image: '',
		description: "I'm making a note here: HUGE SUCCESS.",
		type: 'web'
	}
];
