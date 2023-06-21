<script>
  export let quizzes; 
  export let urlTag;
  import Card from "./Card.svelte";
</script>

<div class="bg-gray-800 text-white py-6 px-6 min-h-screen flex justify-center">

  {#if quizzes}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
      {#each quizzes as quiz, index}
        <Card {quiz} key={index} {urlTag} />
      {/each}
    </div>
  {/if}

</div>
