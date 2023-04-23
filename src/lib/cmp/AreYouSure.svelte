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

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16.5 6.5L7.5 15.5" />
        <path d="M7.5 6.5L16.5 15.5" />
      </svg>

    </div>
{:else}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex hover:cursor-pointer justify-center"
      on:click={()=>deleteFn(index)} >
      <span class="text-red-600">Sure?</span>  
    </div>
{/if}    