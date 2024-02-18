<script lang="ts">
	import { goto } from '$app/navigation';
	export let title: string;
	export let previous: string = '/';

	const goBack = (e: KeyboardEvent) => e.key === 'Escape' && (e.preventDefault(), goto(previous));
</script>

<div class="flex-center">
	<div class="flex-center">
		<h1>{title}</h1>
		<slot />
	</div>
	<a
		href={previous}
		class="close"
		aria-label="Go Back"
		rel="noopener noreferrer"
		role="button"
		on:keydown={goBack}>&times;</a
	>
</div>

<style lang="scss">
	.flex-center {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 0.8rem;
	}

	.close {
		color: $black-light;
		font-size: 2rem;
		padding: 0rem 0.6rem 0.3rem 0.6rem;
		cursor: pointer;
		transition: all 0.3s ease-out;
		-webkit-tap-highlight-color: transparent;
		font-family: none;

		&:hover {
			transform: rotate(90deg);
		}
	}
</style>
