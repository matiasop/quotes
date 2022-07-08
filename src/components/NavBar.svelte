<script>
  import { Link } from "svelte-navigator";
  import DarkModeToggler from "../components/DarkModeToggler.svelte";
</script>

<nav class="navbar">
  <DarkModeToggler />
  <Link to="/">Home</Link>
  <Link to="about">About</Link>
</nav>

<style>
  .navbar {
    height: 60px;
    background-color: --bg-color;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: #888;
  }
</style>
