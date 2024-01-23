<script>
	export let data;
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
<img src={data.project.image} alt={data.project.title} />
<div>{data.project.description}</div>

<a href="/projects">Go back</a>
