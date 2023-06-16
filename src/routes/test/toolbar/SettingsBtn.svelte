<script>
export let toggleShowSettings;
export let showSettings;
</script>

<div class="w-20">
    <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
    on:click={toggleShowSettings}  >
      <span class="text-2xl">⚙️</span>
      <span class="text-sm font-medium 
      { showSettings == true ? "text-green-400" : "text-red-400"}" 
      >Settings</span>
    </button>
  </div>