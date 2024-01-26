<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Image from '$lib/components/image.svelte';

	export let data;
</script>

<Header title={data.project.title} previous="/projects"></Header>
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

<Image key={data.project.slug} label={data.project.title} />

<div>{data.project.description}</div>
