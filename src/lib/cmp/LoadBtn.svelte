<script>
export let isLoading = false;
export let eventHandler;
export let title ="Submit";
</script>

{#if !isLoading}

<button class="bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:from-blue-700 focus:to-blue-900 text-black rounded-md p-2 pl-4 pr-6 m-6 transition-colors duration-300 ease-in-out w-11/12 mx-auto"  
  on:click={eventHandler}>
  {title}
</button>


{:else}
<div class= "animate-spin w-8 h-8 border-white rounded-full border-b-8 mx-auto"></div>
{/if}
