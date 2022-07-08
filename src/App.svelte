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
			<p class="body-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
				aliquam vitae id corrupti explicabo accusamus et amet tempora? Dicta,
				doloremque a. Quos similique fugiat, deserunt sit voluptates reiciendis
				quod impedit.
			</p>
		</Route>
	</Router>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=EB+Garamond&family=Montserrat:wght@600&display=swap");
	:root {
		--bg-color: white;
		--text-color: #0f172a;
		--header-font: "Montserrat";
		--body-font: "EB Garamond";
	}

	:global(body) {
		background: var(--bg-color);
		color: var(--text-color);
	}

	:global(body.dark-mode) {
		--bg-color: #0f172a;
		--text-color: #e2e8f0;
	}

	:global(.header-text) {
		font-family: var(--header-font);
	}

	:global(.body-text) {
		font-family: var(--body-font);
		font-size: 1.5rem;
	}
</style>
