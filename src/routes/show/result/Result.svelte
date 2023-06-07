<script>
import ReportPart from "./ReportPart.svelte";
import transformQ2R from "../transformQ2R/transformQ2R";
import { onMount } from 'svelte';
import Cards from "./Cards.svelte";
import Title from "./Title.svelte";
export let quiz;
let result;
export let setShowOutroFinal;


// onMount(async () => {
//  try {
//    result = await transformQ2R(quiz);

//     // console.error(quizResult);
// // debugger;
//  } catch (error) {
//     console.error(error);
// }
// }); 


</script>

{#if result}

<!--cards at top -->
<div class="flex p-1 m-1 bg-gray-700 rounded-md justify-center">

  <Cards  title= 'Wrong Answers' icon=&#x1F645;  count ={result.wrongAnswers.length} bg="bg-red-900" />

  <Cards  title= 'Skipped Answers' icon=&#x1F937;  count ={result.skippedAnswers.length} bg="bg-blue-900" />

  <Cards  title= 'Correct Answers' icon=&#x1F44D;  count ={result.correctAnswers.length} bg="bg-green-900" />

</div>


<div class="p-2 m-2 rounded-md pt-4">
 

<div class="bg-gray-800 rounded-lg p-2 text-gray-100">
<!--=================================-->
<Title  title="Wrong Answers" bg="bg-red-900" icon=&#x1F645;/>
<ReportPart answersArray={result.wrongAnswers} {quiz} />

<!--=================================-->
<Title  title="Skipped Answers" bg="bg-blue-900" icon=&#x1F937;/>
<ReportPart answersArray={result.skippedAnswers} {quiz} />

<!--=================================-->
<Title  title="Correct Answers" bg="bg-green-900" icon=&#x1F44D;/>
<ReportPart answersArray={result.correctAnswers} {quiz} />
<!--=================================-->
</div>

<br/>
<hr>
<br/>
<div class="flex w-full justify-center">
  <button class="w-6/12 bg-blue-600 text-white m-3 p-3 
  rounded-lg hover:bg-blue-500 active:bg-blue-900"
  on:click={setShowOutroFinal}>
  Ok
  </button>
</div>


</div>
{/if}