<div class="main">
	<slot />
</div>

<style lang="scss">
	.main {
		background: $blue-pale-light;
		color: $black-light;
		border-radius: 10% 5%;
		padding: 2rem;
		border: 0.5rem solid $white;
		box-sizing: border-box;

		@include gt-sm {
			border-radius: 70% 30% / 25% 75%;
			padding: 9rem 6rem;
			min-width: 440px;
		}
	}
</style>
