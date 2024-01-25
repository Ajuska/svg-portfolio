<script lang="ts">
	export let title: string;
	export let previous: string = '/';
</script>

<div class="header-container">
	<h1>{title}</h1>
	<a href={previous} class="close" aria-label="Go Back">&times;</a>
</div>

<style lang="scss">
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.close {
		color: #404663;
		font-size: 2rem;
		padding: 0rem 0.9rem;
		cursor: pointer;
		transition: all 0.3s ease-out;
		-webkit-tap-highlight-color: transparent;

		&:hover {
			transform: rotate(90deg);
		}
	}
</style>
