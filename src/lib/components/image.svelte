<script lang="ts">
	import { type ProjectSlug } from '$routes/(app)/projects/data';
	import boostShip from '$lib/assets/boost-ship.png';
	import eatGun from '$lib/assets/eat-gun.png';
	import elektroCz from '$lib/assets/elektro-cz.png';
	import needForJamf from '$lib/assets/need-for-jamf.png';
	import teddy from '$lib/assets/teddy.png';
	import wedding from '$lib/assets/wedding.png';

	const imgs: { [key in ProjectSlug]?: string } = {
		'boost-ship': boostShip,
		'eat-gun': eatGun,
		'elektro-cz': elektroCz,
		'need-for-jamf': needForJamf,
		teddy,
		wedding
	};

	export let key: ProjectSlug;
	export let label: string;
</script>

{#if imgs[key]}
	<img src={imgs[key]} alt={label} class="image" />
{/if}

<style>
	.image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
