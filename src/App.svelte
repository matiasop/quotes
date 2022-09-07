<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import NavBar from "./components/NavBar.svelte";
  import Footer from "./components/Footer.svelte";
  import Books from "./pages/Books.svelte";
  import Quotes from "./pages/Quotes.svelte";
  import Quote from "./pages/Quote.svelte";
</script>

<main>
  <Router>
    <div id="page-container">
      <div id="content-wrap">
        <NavBar />

        <Route path="/">
          <h1 class="body-text">Home Page</h1>
        </Route>
        <Route path="books">
          <Books />
        </Route>
        <Route path="quotes/:bookId" component={Quotes} primary={false} />
        <Route
          path="quote/:bookId/:quoteId"
          component={Quote}
          primary={false}
        />
        <Route path="about">
          <p class="body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            aliquam vitae id corrupti explicabo accusamus et amet tempora?
            Dicta, doloremque a. Quos similique fugiat, deserunt sit voluptates
            reiciendis
          </p>
        </Route>
      </div>

      <Footer />
    </div>
  </Router>
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
    min-height: 100vh;
  }

  #content-wrap {
    padding-bottom: 4rem; /* Footer height */
  }
</style>
