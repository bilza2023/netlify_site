
<script>
import Card from "./Card.svelte";

import { onMount } from 'svelte';
export let results;
let quizResults;

function getQuizSummary() {
  let correctCount = 0;
  let skippedCount = 0;
  let wrongCount = 0;

  results.forEach(result => {
    correctCount += result.correctAnswers.length;
    skippedCount += result.skippedAnswers.length;
    wrongCount += result.wrongAnswers.length;
  });

  return {
    correct: correctCount,
    skipped: skippedCount,
    wrong: wrongCount
  };
}
onMount(async () => {
     quizResults =  getQuizSummary();
    //  console.log("{quizResults.correct}" ,quizResults);

});

</script>



<div class="flex justify-center w-full my-4 gap-1">

{#if quizResults}
<Card title="Total Responses" count={results.length} />
<Card title="Total Correct" count= {quizResults.correct} />
<Card title="Total Skipped" count= {quizResults.skipped} />
<Card title="Total Wrong" count= {quizResults.wrong} />
{/if}


</div>