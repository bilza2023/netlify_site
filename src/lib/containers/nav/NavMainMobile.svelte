<script>
  import {onMount, afterUpdate, onDestroy} from 'svelte';

  let isVisible = false;

  const toggleDropdown = () => {
    isVisible = !isVisible;
  };

  const hideDropdown = () => {
    isVisible = false;
  };

  const handleClickOutside = (event) => {
    if (node && !node.contains(event.target)) {
      hideDropdown();
    }
  };

  onMount(() => {
    document.addEventListener('mousedown', handleClickOutside);
  });

  afterUpdate(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });

  onDestroy(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });
</script>

<div class="flex bg-gray-700 shadow-lg justify-between p-2">
  <div>
    <a class="text-xl font-bold text-white" href="/">My Website</a>
  </div>

  <div class="relative">
    <button class="text-white hover:text-gray-300 py-2 px-4" on:click={toggleDropdown}>
      Actions
    </button>
    {#if isVisible}
    <div class="absolute right-0 z-50 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
      <a
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        href="#"
      >
        Action 1
      </a>
      <a
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        href="#"
      >
        Action 2
      </a>
    </div>
    {/if}
  </div>
</div>
