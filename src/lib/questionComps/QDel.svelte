<script>
 
// export let index;
export let id;
export let deleteQuestion;

let trigger = false;

const fire = ()=> {
trigger = true;
setTimeout( ()=> trigger=false,2000);
}

</script>

{#if trigger == false}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex items-center justify-center rounded-t-lg border border-gray-400 p-2 
    hover:cursor-pointer hover:bg-gray-600 active:bg-gray-800 w-1/12
    bg-gray-900 text-center "  on:click={fire} >
      <span class="text-xl">🗑️</span>
    </div>
{:else}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex items-center justify-center  rounded-t-lg border border-gray-400 p-2 text-white 
    hover:cursor-pointer bg-red-800 hover:bg-red-600 active:bg-red-900
    w-1/12 text-center"
      on:click={()=>deleteQuestion(id)} >
      Sure?
    </div>
{/if}    