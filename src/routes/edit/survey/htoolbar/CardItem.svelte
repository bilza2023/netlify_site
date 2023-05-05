<script>
export let handler;
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="text-xs hover:bg-stone-800 hover:cursor-pointer  m-1"
on:click={handler}
>
<slot></slot>
</div>