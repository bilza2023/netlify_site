<script>
export let tag;
export let remove;

</script>




<div class="inline-flex  border-white rounded-md border bg-green-900 m-1">

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="  p-1 inline-block"
 on:click={()=>remove(tag._id)}>
 {tag.name}
</div>

<button class=" p-1 border-white rounded-md border bg-green-900
 hover:cursor-pointer"
 on:click={()=>remove(tag._id)}>
 ❌
 </button>    

</div> 