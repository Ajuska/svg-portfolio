<div class="main">
	<slot />
</div>

<style lang="scss">
	.main {
		background: $blue;
		color: $black-light;
		border-radius: 10% 5%;
		padding: 2rem;
		border: 0.5rem solid $blue-pale-light;
		min-width: 440px;

		@include gt-sm {
			border-radius: 70% 30% / 25% 75%;
			padding: 8rem;
		}
	}
</style>
