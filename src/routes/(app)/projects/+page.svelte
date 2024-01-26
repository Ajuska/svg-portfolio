<script lang="ts">
	import Header from '$lib/components/header.svelte';
	export let data;

	let bgImgG = 'def';
	let bgImgW = 'def';
	const sections: (keyof typeof data)[] = ['websites', 'games'];
</script>

<Header title="Projects" />

<div class="wrapper">
	{#each sections as section}
		<div class="project-card">
			<div
				class="backdrop"
				style="background-image: url('/src/lib/assets/{section === 'games'
					? bgImgG
					: bgImgW}.png');"
				aria-hidden="true"
				id={section}
			></div>
			<h2 id="section">{section}</h2>
			<ul aria-labelledby="section">
				{#each data[section] as { slug, title }}
					<li aria-label={title} class={slug}>
						<a
							href="/projects/{slug}"
							on:mouseenter={() => {
								section === 'games' ? (bgImgG = slug) : (bgImgW = slug);
							}}
							on:mouseleave={() => ((bgImgG = 'def'), (bgImgW = 'def'))}>{title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

<style lang="scss">
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;

		@include xs {
			grid-template-columns: 1fr;
		}
	}

	h2 {
		@include xs {
			font-size: 1.3rem;
		}
	}

	.project-card {
		padding: 1rem;
		background-color: $white;
		position: relative;
		border-radius: 1rem;

		ul {
			position: relative;
			list-style: none;
			padding: 0;

			li {
				padding: 0.5rem 0;
				a:hover {
					color: $pink;
					padding: 0.6rem;
					margin-left: 0.2rem;
					background-color: $black-light;
				}
			}
		}

		.backdrop {
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
			opacity: 0.3;
			border-radius: 1rem;
			border: 0.2rem solid $white;
			transition: background 300ms ease-in-out 200ms;
		}
	}
	#section {
		text-transform: capitalize;
		position: relative;
	}
</style>
