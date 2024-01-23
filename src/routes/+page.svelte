<script>
	import Portrait from '$lib/assets/portrait.svelte';
</script>

<div class="page">
	<!-- <div class="frame"></div> -->
	<Portrait />
</div>

<style lang="scss">
	.page {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.frame {
		background-color: white;
		width: 95%;
		border-radius: 70% 30% / 25% 75%;
		@include gt-sm {
			width: 65%;
		}
		@include gt-md {
			width: 45%;
		}
	}
</style>
