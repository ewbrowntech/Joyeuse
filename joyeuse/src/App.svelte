<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import "./components/TrayIcon";

  let greetMsg = $state("");
  let name = $state("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<main class="container">
  <h1>Welcome to Tauri + Svelte</h1>

  <div class="row">
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo vite" alt="Vite logo" />
    </a>
    <a href="https://tauri.app" target="_blank">
      <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src="/svelte.svg" class="logo svelte" alt="Svelte logo" />
    </a>
  </div>
  <p>Click on the Tauri, Vite, and Svelte logos to learn more.</p>

  <form
    class="row"
    onsubmit={(e) => {
      e.preventDefault();
      greet();
    }}
  >
    <input
      id="greet-input"
      oninput={(e) => (name = e.currentTarget.value)}
      placeholder="Enter a name..."
    />
    <button type="submit">Greet</button>
  </form>
  <p>{greetMsg}</p>
</main>

<style>
  @import "./App.css";
</style>
