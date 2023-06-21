<script>
  export let quizzes; 
  export let urlTag;
  import Card from "./Card.svelte";
</script>

<div class="w-full bg-gray-800 text-white py-6  min-h-screen  justify-center">

  {#if quizzes}
    <div class="px-28 ">
      {#each quizzes as quiz, index}
        <Card {quiz} key={index} {urlTag} />
      {/each}
    </div>
    <br/>
  {/if}

</div>
