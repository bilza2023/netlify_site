<!-- <script>
import HdgMain from "$lib/cmp/HdgMain.svelte";
  export let results = [];
  
</script>

<HdgMain background_color="bg-red-900" >
<p>The Questions that you got wrong:</p>
</HdgMain>

{#each  results as result }
    <p>Question ::{result.question}</p>
    <p>Explanation ::{result.explanation}</p>
    <p>Correct Answer :{result.correctAnswer}</p>
    <hr/>
{/each} -->
<script>
  import HdgMain from "$lib/cmp/HdgMain.svelte";
  export let results = [];
</script>

<HdgMain background_color="bg-red-900" >
  <p class="text-white">The Questions that you got wrong:</p>
</HdgMain>

<div class="bg-gray-800 p-4 rounded-lg">
  {#each results as result }
    <div class="bg-gray-900 rounded-lg p-4 mb-4">
      <p class="text-black font-medium mb-2 bg-red-100 p-1 rounded-sm">Question: {result.question}</p>
      <p class="text-gray-300 mb-2">{result.explanation}</p>
      <p class="text-gray-400">Correct Answer: {result.correctAnswer}</p>
    </div>
   
    <!-- {#if !(index === results.length - 1)} -->
      <hr class="border-gray-600 my-4"/>
    <!-- {/if} -->
  {/each}
</div>
