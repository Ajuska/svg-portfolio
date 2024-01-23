<script>
	export let data;
</script>

<h1>Projects</h1>

<h2>Games</h2>
<ul>
	{#each data.games as { slug, title }}
		<li><a href="/projects/{slug}">{title}</a></li>
	{/each}
</ul>

<h2>Websites</h2>
<ul>
	{#each data.webs as { slug, title }}
		<li><a href="/projects/{slug}">{title}</a></li>
	{/each}
</ul>

<a href="/">Go back</a>
