<script>
export let title;
export let tag;
export let callback;
</script>



<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="rounded-sm text-center text-xs  bg-gray-800 hover:bg-gray-400 active:bg-gray-900 m-1 p-1 hover:cursor-pointer"

on:click={()=>callback(tag)}>

{title}
</div>