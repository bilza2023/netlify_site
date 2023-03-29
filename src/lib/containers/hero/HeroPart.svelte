<script>
export let title = "";
export let items = [];
export let myIndex;
export let selectedIndex;
export let selectedItemIndex;
</script>

<div class="flex-1 flex flex-wrap bg-gray-900 rounded-md m-1 p-1">
{#if selectedIndex == myIndex}
<div class="text-center p-1 m-1 border-2 border-gray-400 rounded-md w-full bg-green-900">{title}</div>
{:else}
  <div class="text-center p-1 m-1 border-2 border-gray-400 rounded-md w-full bg-gray-900">{title}</div>
{/if}




{#each items as item, index }
    {#if selectedItemIndex == index && selectedIndex == myIndex}
        <div class="flex-1 w-25 p-1 m-1 border-2 border-gray-400 text-center rounded-lg bg-red-900">{item}</div>       
    {:else}
        <div class="flex-1 w-25 p-1 m-1 border-2 border-gray-400 text-center rounded-lg ">{item}</div>       
    {/if}
 
    
{/each}


</div>
