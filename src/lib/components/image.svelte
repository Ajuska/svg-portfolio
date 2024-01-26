<script lang="ts">
	import { type ProjectSlug } from '$routes/(app)/projects/data';
	import boostShip from '$lib/assets/boost-ship.png?enhanced';
	import eatGun from '$lib/assets/eat-gun.png?enhanced';
	import elektroCz from '$lib/assets/elektro-cz.png?enhanced';
	import needForJamf from '$lib/assets/need-for-jamf.png?enhanced';
	import teddy from '$lib/assets/teddy.png?enhanced';
	import wedding from '$lib/assets/wedding.png?enhanced';

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
	<enhanced:img src={imgs[key]} alt={label} class="image" />
{/if}

<style>
	.image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
