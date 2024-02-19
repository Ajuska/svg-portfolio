<script lang="ts">
	import { type ProjectSlug } from '$routes/(app)/projects/data';
	import boostShip from '$lib/assets/boost-ship.webp';
	import eatGun from '$lib/assets/eat-gun.webp';
	import elektroCz from '$lib/assets/elektro-cz.webp';
	import needForJamf from '$lib/assets/need-for-jamf.webp';
	import portfolio from '$lib/assets/portfolio.webp';
	import teddy from '$lib/assets/teddy.webp';
	import wedding from '$lib/assets/wedding.webp';

	const imgs: { [key in ProjectSlug]?: string } = {
		'boost-ship': boostShip,
		'eat-gun': eatGun,
		'elektro-cz': elektroCz,
		'need-for-jamf': needForJamf,
		portfolio,
		teddy,
		wedding
	};

	export let key: ProjectSlug;
	export let label: string;
</script>

{#if imgs[key]}
	<img src={imgs[key]} alt={label} class={$$props.class} />
{/if}

<style>
	.image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.image-sm {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
		filter: grayscale(100%) contrast(120%);
	}
</style>
