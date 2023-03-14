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
    console.log("resp", resp );

 } catch (error) {
    console.error(error);
  }

}); 

</script>


{#if resp}
<div class="bg-gray-750 rounded-lg p-2 text-gray-100">
<!--=================================-->
<ReportPart answersArray={resp.wrongAnswers} {quiz} title="Questions that were Wrong:" background_color="#602222"/>

<!--=================================-->
<ReportPart answersArray={resp.skippedAnswers} {quiz} title="Questions that were Skipped:"  background_color="#0d2560"/>

<!--=================================-->
<ReportPart answersArray={resp.correctAnswers} {quiz} title="Questions that were Correct:" background_color="#0f3813" />
<!--=================================-->
</div>
{/if}

<div class="flex justify-center">
<button class="bg-blue-600 text-white m-3 p-3 rounded-lg"
on:click={ ()=> goto('/') }>
Home
</button>
</div>