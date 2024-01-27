<script lang="ts">
	import Portrait from '$lib/components/portrait.svelte';

	import { fade } from 'svelte/transition';
</script>

<div class="main">
	<!-- <Portrait class="face" animType="fadeOut" /> -->
	<slot />
</div>

<style lang="scss">
	.main {
		background: $blue;
		color: $black-light;
		border-radius: 10% 5%;
		padding: 1rem;
		border: 0.5rem solid $blue-pale-light;
		opacity: 0;
		animation-duration: 1s;
		animation-name: fadeIn;
		animation-delay: 1s;
		animation-fill-mode: both;

		@include gt-sm {
			border-radius: 70% 30% / 25% 75%;
			padding: 6rem;
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
