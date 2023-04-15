<script>
let trigger = false;
export let deleteFn;
// export let index;
export let id;

const fire = ()=> {
trigger = true;
setTimeout( ()=> trigger=false,2000);
}

</script>

{#if trigger == false}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="rounded-t-lg border border-gray-400 p-2 
    hover:cursor-pointer hover:bg-gray-600 active:bg-gray-900"  on:click={fire} >
      Delete
    </div>
{:else}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="rounded-t-lg border border-gray-400 p-2 text-white 
    hover:cursor-pointer bg-red-800 hover:bg-red-600 active:bg-red-900"
      on:click={()=>deleteFn(id)} >
      Sure?
    </div>
{/if}    