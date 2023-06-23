<script>
export let tag;
export let add;

</script>

<div class="inline-flex  ">
<button class=" m-1 p-1 border-white rounded-md border bg-stone-700
 hover:cursor-pointer"
 on:click={()=>add(tag._id)}>
 {tag.name}
 </button>    

</div> 