<div class="page">
	<div class="centered">
		<slot />
	</div>
</div>

<style lang="scss">
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
			width: 45%;
		}
	}
</style>
