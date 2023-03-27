<script>
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import saveResponse from "./saveResponse.js";
import ReportPart from "./ReportPart.svelte";
export let quiz;
let resp;
onMount(async () => {
 try {
    //  console.log("quiz", quiz);
    resp = await saveResponse(quiz);
    // debugger;
   //  console.log("resp", resp );

 } catch (error) {
    console.error(error);
  }

}); 

</script>

{#if resp}

<div class="flex p-1 m-1 bg-gray-700 rounded-md justify-center">

<div class="p-1 m-1 rounded-lg bg-red-900 text-white">
Wrong Answers: {resp.wrongAnswers.length}</div>

<div class="p-1 m-1 rounded-lg bg-green-900 text-white">
Correct Answers: {resp.correctAnswers.length}</div>


<div class="p-1 m-1 rounded-lg bg-gray-500 text-white">
Skipped Answers: {resp.skippedAnswers.length}</div>

</div>





<div class="bg-gray-600 p-2 m-2 rounded-md pt-4">


<div class="bg-gray-650 rounded-lg p-2 text-gray-100">
<!--=================================-->
<ReportPart answersArray={resp.wrongAnswers} {quiz} title="Wrong Questions" background_color="#602222"/>

<!--=================================-->
<ReportPart answersArray={resp.skippedAnswers} {quiz} title="Skipped Questions"  background_color="#0d2560"/>

<!--=================================-->
<ReportPart answersArray={resp.correctAnswers} {quiz} title="Correct Questions" background_color="#0f3813" />
<!--=================================-->
</div>


<div class="flex justify-center">
<button class="bg-blue-600 text-white m-3 p-3 rounded-lg"
on:click={ ()=> goto('/') }>
Home
</button>
</div>

</div>
{/if}