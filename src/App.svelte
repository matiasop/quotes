<script lang="ts">
  import Router from "svelte-spa-router";
  import NavBar from "./components/NavBar.svelte";
  import Footer from "./components/Footer.svelte";
  import Books from "./pages/Books.svelte";
  import Quotes from "./pages/Quotes.svelte";
  import Quote from "./pages/Quote.svelte";

  let routes = {
    "/": Books,
    "/quotes/:bookId": Quotes,
    "/quote/:bookId/:quoteId": Quote,
  };
</script>

<main>
  <Router {routes} />
  <div id="page-container">
    <div id="content-wrap">
      <NavBar />
      <Footer />
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=EB+Garamond&family=Montserrat:wght@600&display=swap");
  :root {
    --bg-color: white;
    --text-color: #0f172a;
    --accent-color: #3e60af;
    --header-font: "Montserrat";
    --body-font: "EB Garamond";
  }

  :global(body) {
    background: var(--bg-color);
    color: var(--text-color);
    margin-top: 65px;
    transition: background 0.5s;
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

  #page-container {
    position: relative;
    min-height: 80vh;
  }

  #content-wrap {
    padding-bottom: 4rem; /* Footer height */
    display: flex;
    justify-content: center;
  }
</style>
