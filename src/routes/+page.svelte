<script>
	import Portrait from '$lib/assets/portrait.svelte';
</script>

<div class="page">
	<Portrait />
</div>

<style lang="scss">
	:root {
		background-color: black;
		color: white;
	}

	:global(a) {
		color: grey;
	}

	:global(body) {
		margin: 0;
		height: 100vh;
		width: 100vw;
	}

	.page {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>
