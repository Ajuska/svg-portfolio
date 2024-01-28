<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.status}</h1>

{#if $page.status === 404}
	<h2>Page is on strike</h2>
	<p>It demands better content, more pixels, and a coffee machine. Negotiations are underway.</p>
{:else}
	<h2>Oh this is embarrassing</h2>
	<p>
		My server is throwing a tantrum and demanding a snack. I'm feeding it some bytes to calm it
		down. Your patience is highly appreciated as I resolve this technical hunger strike called "{$page
			.error?.message}"
	</p>
{/if}

<a href="/" aria-label="Go Back" rel="noopener noreferrer">Take me back to home page</a>
