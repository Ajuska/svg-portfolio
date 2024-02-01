<script lang="ts">
	import { page } from '$app/stores';
	import Transition from '$lib/components/transition.svelte';
	import Loading from '$lib/icons/loading.svg';

	let isPageLoaded = false;

	function pageLoaded(_: HTMLDivElement) {
		isPageLoaded = true;
	}
</script>

{#if !isPageLoaded}
	<div class="loader" use:pageLoaded>
		<img src={Loading} alt="Loading" />
	</div>
{/if}

<Transition path={$page.url.pathname}>
	<div class="page">
		<div class="centered">
			<slot />
		</div>
	</div>
</Transition>

<style lang="scss">
	.loader {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: grid;
		place-items: center;
		z-index: 99;
		background-color: $black;
	}

	.page {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
	.centered {
		width: 90%;

		@include gt-sm {
			width: 60%;
		}
		@include gt-md {
			width: 40%;
		}
	}

	:root {
		background-color: $black;
		color: $white;
		font-family: 'Roboto Condensed', System-ui, Arial;
	}

	:global(h1) {
		font-family: Marker Felt;
		text-transform: uppercase;
		@include xs {
			font-size: 1.7rem;
		}
	}

	:global(a) {
		color: $pink-dark;
		text-decoration: none;
		transition: 0.3s all ease;

		&:hover {
			color: $pink-light;
		}
	}

	:global(body) {
		margin: 0;
		height: 100vh;
		width: 100vw;

		@include xs {
			margin-top: 2.5rem;
		}
	}

	@font-face {
		font-family: 'Roboto Condensed';
		src: url('/src/lib/style/fonts/rbt.woff'), url('/src/lib/style/fonts/rbt.woff2'),
			url('/src/lib/style/fonts/rbt.ttf');
	}
</style>
