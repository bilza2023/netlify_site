<script>
export let title;
export let bgColor = "bg-green-700";
export let clickHandler;
</script>




<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class= {` ${bgColor} text-sm  rounded-md p-1 m-1 hover:bg-green-600 active:bg-green-800 hover:cursor-pointer`} on:click={clickHandler}>
    <span class="">{title}</span>
</div>