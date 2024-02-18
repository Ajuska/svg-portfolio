export const projects = [
	{
		slug: 'portfolio',
		title: 'Portfolio',
		tech: ['Javascript', 'Inkscape'],
		role: ['Programming', 'UI/UX Design', 'Content Creation', 'Deployment'],
		links: [
			{ name: 'Website', href: 'http://andrea.vicar.dev' },
			{ name: 'Code', href: 'https://github.com/Ajuska/svg-portfolio' }
		],
		description:
			'This is a personal project aimed at pushing the boundaries of traditional portfolio design. My goal was to create visually striking and memorable SVG image that effectively conveys information. To expand and strenghten my technical skills, I utilized tools such as Bun, Vite, Svelte, and Inkscape throughout the development process. From the outset, I approached this project with thorough planning and estimation, utilizing Trello boards to ensure every development phase — from brainstorming and research to wireframing, development, and release.',
		type: 'website'
	},
	{
		slug: 'wedding',
		title: 'Wedding',
		tech: ['Javascript', 'Blender', 'Figma'],
		role: ['Programming', 'UI/UX Design', 'Content Creation', 'Translations', 'Deployment'],
		links: [{ name: 'Website', href: 'https://svatba.vicar.dev/' }],
		description:
			"Explore the anonymized version of our enchanting wedding website through the provided link. The page includes all necessary details for guests. Experience seamless transitions between light and dark modes, tailored to your device's system preference, along with language support. All 3D content is custom-made, and the page is mobile-friendly for easy access.",
		type: 'website'
	},
	{
		slug: 'elektro-cz',
		title: 'Elektro CZ',
		tech: ['Javascript', 'Sketch'],
		role: ['Programming', 'UI/UX Design', 'Content Creation', 'Translations'],
		links: [{ name: 'Website', href: 'http://elektrocz.eu/en/' }],
		description:
			"This project spans through all web development phases, including consultation, design, and actual creation, with the exception of the deployment phase. The main goal was to craft a virtual business card with a touch of presentation. Additionally, it's available in three languages and features a user-friendly, mobile-responsive design, guaranteeing a delightful experience for all visitors.",
		type: 'website'
	},
	{
		slug: 'eat-gun',
		title: 'Eat Gun',
		tech: ['Unity', 'Procreate'],
		role: ['2D Art', 'Level Design'],
		links: [{ name: 'Play the game', href: 'https://rangwath.itch.io/eat-gun' }],
		description:
			'This marks my first three-day Game Jam project, created in collaboration with two friends. The chosen theme, "A gun you cannot shoot", ignited our creativity, resulting in a captivating 2D platformer game where players take control of a character whose objective is to consume guns, progressing towards the golden one. Notably, all visual assets have been meticulously hand-painted by me and thoughtfully placed within the game scene.',
		type: 'game'
	},
	{
		slug: 'need-for-jamf',
		title: 'Need for Jamf',
		tech: ['Unity', 'Blender'],
		role: ['3D Art', 'Level Design'],
		links: [{ name: 'Play the game', href: 'https://rangwath.cz/gj-games/need-for-jamf' }],
		description:
			"This project was created during a 16-hour company Hacksgiving event with the goal of providing a relaxing activity for our colleagues and fostering a sense of togetherness. It's a split-screen multiplayer 3D racing game set in our office layout. The assets include a combination of custom ones made by me and assets from the Office Pack by Synty Studios.",
		type: 'game'
	},
	{
		slug: 'teddy',
		title: 'Teddy',
		tech: ['Unity', 'Blender'],
		role: ['3D Art', 'Level Design', 'Story Creation', 'Shaders Creation'],
		links: [
			{ name: 'Play the game', href: 'https://rangwath.itch.io/tidy-teddy-messy-teddy' },
			{ name: 'Code', href: 'https://github.com/Gamedera/that-one-room' }
		],
		description:
			"Learning from previous experiences, our team of three participated in the second 72-hour Game Jam. Under the theme “That one room”, our game invites players into a child's room. Playing as a teddy bear, you have the power to decide whether the kid will be punished (create a mess) or rewarded (clean up), leading to multiple endings. This 3D platformer adventure is crafted with custom shaders to achieve the desired aesthetic, incorporating a mix of my custom 3D assets and assets from Kenney.",
		type: 'game'
	},
	{
		slug: 'boost-ship',
		title: 'Boost ship',
		tech: ['Unity', 'C#'],
		role: ['Programming', '3D Art', 'Level Design'],
		links: [
			{ name: 'Play the game', href: 'https://whoooly.itch.io/project-boost' },
			{ name: 'Code', href: 'https://github.com/Ajuska/Project-Boost' }
		],
		description:
			'My first simple 3D platformer game, experimenting with various game concepts such as movement, sound, animation, and level design.',
		type: 'game'
	}
] as const;

export type Project = (typeof projects)[number];
export type ProjectSlug = Project['slug'];
