<script>
  export let runs; 
  export let urlTag;
  // import Card from "./Card.svelte";

</script>

<div class="w-full bg-gray-800 text-white py-6  min-h-screen  justify-center">

  <!-- {#if runs} -->
    <div class="px-28 ">
      {#each runs as run, index}
        <!-- <Card {run} key={index} {urlTag} /> -->
        <h1>{runs._id}</h1>
      {/each}
    </div>
    <br/>
  <!-- {/if} -->

</div>
