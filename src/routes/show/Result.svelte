<script>
import ReportPart from "./ReportPart.svelte";
import check from "./check.js";
import { onMount } from 'svelte';

export let quiz;
let result;
export let setShowOutroFinal;


onMount(async () => {
 try {
   result = await check(quiz);

    // console.error(quizResult);
// debugger;
 } catch (error) {
    console.error(error);
}
}); 


</script>

{#if result}

<div class="flex p-1 m-1 bg-gray-700 rounded-md justify-center">

<div class="p-1 m-1 rounded-lg bg-red-900 text-white">
Wrong Answers: {result.wrongAnswers.length}</div>

<div class="p-1 m-1 rounded-lg bg-green-900 text-white">
Correct Answers: {result.correctAnswers.length}</div>


<div class="p-1 m-1 rounded-lg bg-gray-500 text-white">
Skipped Answers: {result.skippedAnswers.length}</div>

</div>


<div class="p-2 m-2 rounded-md pt-4">


<div class="bg-gray-800 rounded-lg p-2 text-gray-100">
<!--=================================-->
<ReportPart answersArray={result.wrongAnswers} {quiz} title="Wrong Questions" background_color="#470101"/>

<!--=================================-->
<ReportPart answersArray={result.skippedAnswers} {quiz} title="Skipped Questions"  background_color="#0d2560"/>

<!--=================================-->
<ReportPart answersArray={result.correctAnswers} {quiz} title="Correct Questions" background_color="#023305" />
<!--=================================-->
</div>

<div class="flex-grow-4">
  <button class="bg-blue-600 text-white m-3 p-3 rounded-lg hover:bg-blue-500 active:bg-blue-900"
  on:click={setShowOutroFinal}>
  Ok
  </button>
</div>


</div>
{/if}