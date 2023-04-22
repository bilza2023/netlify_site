<script>
export let quizzes;
import Card from "./Card.svelte";
</script>

<div class="bg-gray-800 text-white m-0 py-0 px-6 min-h-screen flex justify-center " >


{#if quizzes}
<div class="flex flex-wrap justify-center border-2 border-gray-600 gap-2 m-1 p-1 rounded-md w-full">
{#each quizzes as quiz,index }

<Card {quiz} />

{/each}
</div>
{/if}

<br>
<br> 

</div><!--page div ends-->