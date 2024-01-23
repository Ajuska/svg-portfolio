<script>
	import { beforeUpdate, tick, onDestroy } from 'svelte';
	import Portrait from '$lib/assets/portrait.svelte';
	export let data;
	let ready = false;

	beforeUpdate(async () => {
		await tick();
		ready = true;
	});

	onDestroy(() => (ready = false));
</script>

<div class="page-projects">
	<Portrait class={`face-projects ${ready ? 'ready' : ''}`} />

	<div class="layout">
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
	</div>
</div>

<style lang="scss">
	.page-projects {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		transition: all 0.2s ease-in;
	}

	.layout {
		display: grid;
		z-index: 1;
	}
</style>
