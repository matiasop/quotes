<script>
  import { Link } from "svelte-navigator";
  import DarkModeToggler from "../components/DarkModeToggler.svelte";
</script>

<div class="nav-container">
  <nav class="navbar">
    <div class="header-link-wrapper">
      <Link to="books" class="link">Book Quotes</Link>
    </div>
    <div class="nav-right">
      <div class="link-wrapper">
        <Link to="books" class="link">Books</Link>
      </div>
      <div class="vr" />
      <DarkModeToggler />
    </div>
  </nav>
</div>

<style>
  .nav-container {
    height: 65px;
    background: var(--bg-color);
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: #888;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
  }
  .navbar {
    max-width: 60rem;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .vr {
    border-left: 1px solid;
    border-color: #888;
    height: 30px;
  }

  .nav-right {
    display: flex;
    align-items: center;
  }

  .nav-right > * {
    margin: 0 1rem;
  }

  .link-wrapper > :global(a) {
    text-decoration: none;
    color: var(--text-color);
    font-family: var(--header-font);
    font-size: 1.2rem;
  }

  .link-wrapper > :global(a:hover) {
    color: var(--accent-color);
  }

  .header-link-wrapper > :global(a) {
    text-decoration: none;
    color: var(--text-color);
    font-family: var(--header-font);
    font-size: 2rem;
    margin-bottom: 0.2rem;
  }

  .header-link-wrapper > :global(a:hover) {
    color: var(--accent-color);
  }
</style>
