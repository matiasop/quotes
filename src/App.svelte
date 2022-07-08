<script lang="ts">
	import { Router, Route } from "svelte-navigator";
	import NavBar from "./components/NavBar.svelte";
</script>

<main>
	<Router>
		<NavBar />

		<Route path="/">
			<h1>Home</h1>
		</Route>
		<Route path="about">
			<p>About</p>
		</Route>
	</Router>
</main>

<style>
	:root {
		--bg-color: white;
		--text-color: #0f172a;
	}

	:global(body) {
		background: var(--bg-color);
		color: var(--text-color);
	}

	:global(body.dark-mode) {
		--bg-color: #0f172a;
		--text-color: #e2e8f0;
	}
</style>
