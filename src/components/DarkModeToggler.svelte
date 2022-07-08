<script lang="ts">
  let darkMode: boolean = false;
  function toggle() {
    darkMode = !darkMode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<button on:click={toggle}>
  {#if darkMode}
    Light Mode
  {:else}
    Dark Mode
  {/if}
</button>
