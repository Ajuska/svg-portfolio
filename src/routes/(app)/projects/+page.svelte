<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Image from '$lib/components/image.svelte';

	export let data;
</script>

<Header title="Projects" />

<div class="wrapper">
	{#each data.projects as { slug, title, type }}
		<div class="project-card">
			<div class="image-container">
				<Image key={slug} label={slug} class="image-sm" />
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
		background-color: $white;
		// border: 1px solid $grey;
		border-radius: 0.2rem;
		padding: 1rem;
		box-shadow: 0px 2px 5px 0px $black-light;

		.label {
			text-transform: uppercase;
			font-size: 0.7rem;
			margin: 0;
		}
	}
</style>
