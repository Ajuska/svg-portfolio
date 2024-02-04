<script lang="ts">
	import { fade } from 'svelte/transition';
	export let path: string;
</script>

{#key path}
	<div class="transition" in:fade={{ duration: 300 }}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100vh;
	}
</style>
