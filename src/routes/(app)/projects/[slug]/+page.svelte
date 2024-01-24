<script lang="ts">
	export let data;

	import { type ProjectSlug } from '../data';
	import eatGun from '$lib/assets/eat-gun.png?enhanced';

	const imgs: { [key in ProjectSlug]?: string } = { 'eat-gun': eatGun };
</script>

<h1>{data.project.title}</h1>
<ul>
	{#each data.project.tech as tech}
		<li>{tech}</li>
	{/each}
</ul>
<ul>
	{#each data.project.role as role}
		<li>{role}</li>
	{/each}
</ul>
<ul>
	{#each data.project.links as { name, href }}
		<li><a {href} target="_blank">{name}</a></li>
	{/each}
</ul>
{#if imgs[data.project.slug]}
	<enhanced:img src={imgs[data.project.slug]} alt={data.project.title} />
{/if}
<div>{data.project.description}</div>

<a href="/projects">Go back</a>
