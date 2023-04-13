<script>
export let title;
export let visible = true;

const  toggleVisibility = ()=> visible = !visible;
</script>

<div class="flex  rounded-t-lg border border-gray-400 p-0">

    <div class="  text-center w-full p-2">
        {title} 
    </div>
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="rounded-t-lg border border-gray-400 p-2 
    hover:cursor-pointer"
    on:click={toggleVisibility}    
    >
        {visible == true ? "Hide" : "Show" }
    </div>
    
   
</div>


{#if visible==true}
<slot></slot>
{/if}