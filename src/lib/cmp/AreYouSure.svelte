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
    <div class="flex hover:cursor-pointer justify-center"  on:click={fire} >

      <span class="text-2xl">&#x1F5D1;</span>

    </div>
{:else}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex hover:cursor-pointer justify-center"
      on:click={()=>deleteFn(index)} >
      <span class="text-red-600">Sure?</span>  
    </div>
{/if}    