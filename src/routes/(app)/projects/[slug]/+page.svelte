<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Image from '$lib/components/image.svelte';
	import Github from '$lib/icons/github.svelte';
	import Chain from '$lib/icons/chain.svelte';

	export let data;
</script>

<Header title={data.project.title} previous="/projects">
	{#each data.project.links as { name, href }}
		<a
			{href}
			class="icon"
			target="_blank"
			aria-label="{name} (opens in a new tab)"
			rel="noopener noreferrer"
		>
			{#if name === 'Code'}<Github />{:else}<Chain />{/if}
		</a>
	{/each}
</Header>
<div class="metadata">
	<div class="image-container">
		<Image key={data.project.slug} label={data.project.title} class="image" />
	</div>
	<div>
		<h2>Tech</h2>
		{#each data.project.tech as tech}
			<span class="tag yellow-dark">{tech}</span>
		{/each}

		<h2>Roles</h2>
		{#each data.project.role as role}
			<span class="tag yellow">{role}</span>
		{/each}
	</div>
</div>
<p>{data.project.description}</p>

<style lang="scss">
	.image-container {
		animation: 0.3s fadeIn;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.icon {
		width: 1.5rem;
		transition: 0.2s all ease-in;
		padding: 0.6rem 0.3rem 0.3rem 0.3rem;
		fill: $pink-dark;
		&:hover {
			fill: $pink-light;
		}
	}

	.metadata {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;

		@include lt-sm {
			grid-template-columns: 1fr;
		}

		h2 {
			font-size: 1rem;
			margin-bottom: 0;
		}
	}

	.tag {
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: lowercase;
		padding: 0.2rem 0.5rem 0.3rem;
		margin: 0.25rem 0.1rem;
		border-radius: 0.2rem;

		&.yellow-dark {
			background: $yellow-dark;
		}

		&.yellow {
			background: $yellow;
		}
	}
</style>
