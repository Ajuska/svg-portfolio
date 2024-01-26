<div class="main">
	<slot />
</div>

<style lang="scss">
	.main {
		background: $blue;
		color: $black;
		border-radius: 10% 5%;
		padding: 1rem;
		border: 0.5rem solid $white;

		@include gt-sm {
			border-radius: 70% 30% / 25% 75%;
			padding: 6rem;
		}
	}
</style>
