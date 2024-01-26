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

	:root {
		background-color: $black;
		color: $white;
		font-family: 'Roboto Consensed', System-ui, Arial;
	}

	:global(h1) {
		font-family: Marker Felt;
		text-transform: uppercase;
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
	}

	@font-face {
		font-family: 'Roboto Consensed';
		src: url('./rbt.ttf');
	}
</style>
