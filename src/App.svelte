<script lang="ts">
	import DarkModeToggler from "./components/DarkModeToggler.svelte";
</script>

<main>
	<h1>Hello World</h1>
	<DarkModeToggler />
</main>

<style>
	:root {
		--bg-color: #ffffff;
		--text-color: #000000;
	}

	:global(body) {
		background: var(--bg-color);
		color: var(--text-color);
	}

	:global(body.dark-mode) {
		--bg-color: #000000;
		--text-color: #ffffff;
	}
</style>
