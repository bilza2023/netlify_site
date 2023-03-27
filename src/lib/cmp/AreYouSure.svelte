<script>
let trigger = false;
export let deleteFn;
export let index;
const fire = ()=> {
trigger = true;
setTimeout( ()=> trigger=false,2000);
}

</script>

{#if trigger == false}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="rounded-t-lg  border border-gray-800 p-2 bg-red-800 
    hover:cursor-pointer"  on:click={fire} >
        Delete
    </div>
{:else}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="  border border-gray-800 p-2 bg-pink-800 
    hover:cursor-pointer"  on:click={()=>deleteFn(index)} >
        Sure?
    </div>
{/if}    