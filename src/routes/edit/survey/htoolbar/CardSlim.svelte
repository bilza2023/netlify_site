<script>
export let handler;
export let title;
</script>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="w-full  p-1  bg-stone-800 rounded hover:bg-gray-700 active:bg-gray-900 text-center hover:cursor-pointer"
    on:click={()=>handler() }
    >
     <span class="text-xs">{title}</span>  
    </div>