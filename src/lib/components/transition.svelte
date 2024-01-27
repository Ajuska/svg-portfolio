<script lang="ts">
	import { fade } from 'svelte/transition';
	export let path: string;
</script>

{#key path}
	<div class="transition" in:fade={{ duration: 500 }}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
