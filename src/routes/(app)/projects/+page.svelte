<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import { type ProjectSlug } from '$routes/(app)/projects/data';

	export let data;

	$: getUrl = (slug: ProjectSlug): string =>
		new URL(`/src/lib/assets/${slug}.png`, import.meta.url).href;
</script>

<Header title="Projects" />

<div class="wrapper">
	{#each data.projects as { slug, title, type }}
		<div class="project-card">
			<div class="image-container">
				<img src={getUrl(slug)} alt={slug} />
			</div>
			<div>
				<a href="/projects/{slug}" rel="noopener noreferrer">{title}</a>
				<p class="label">{type}</p>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.image-container {
		position: relative;
		display: flex;
		flex-shrink: 0;
		flex-wrap: wrap;
		width: 3rem;
		height: 3rem;
		overflow: hidden;
		margin-right: 1rem;
	}
	.image-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
		filter: grayscale(100%) contrast(120%);
	}

	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;

		@include xs {
			grid-template-columns: 1fr;
		}
	}

	.project-card {
		display: flex;
		align-items: center;
		background-color: $blue-pale-light;
		border-radius: 0.2rem;
		padding: 1rem;

		.label {
			text-transform: uppercase;
			font-size: 0.7rem;
			margin: 0;
		}
	}
</style>
