<script>
// import { onMount } from 'svelte';

// import Clone from "./Clone.svelte";
// import { fade } from 'svelte/transition';

// export let quiz;
export let toggleShowTable;
export let showTable;

</script>

<div class="flex justify-left   items-center bg-gray-400 px-2  py-1 gap-2 ">


<div class="w-20">
  <button class="w-full flex flex-col items-center p-1 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={toggleShowTable}
   >
      {#if showTable==true}
        <span class="text-2xl"> 🎴</span>
    <span class="text-sm font-medium text-white">Cards</span>
      {:else}
        <span class="text-2xl"> 📇</span>
        <span class="text-sm font-medium text-white">Table</span>
      {/if}
  </button>
</div>


</div>

