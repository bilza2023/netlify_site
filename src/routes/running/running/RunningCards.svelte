<script>
  export let runs; 
  export let urlTag;
  import Card from "./Card.svelte";
// function ok(){
//     debugger;
// }
// ok();


</script>

<div class="w-full bg-gray-800 text-white py-6  min-h-screen  justify-center">

  <!-- {#if runs} -->
    <div class="px-28 ">
      {#each runs as run, index}
        <Card {run} key={index} {urlTag} />
      {/each}
    </div>
    <br/>
  <!-- {/if} -->

</div>
