<script>
import { onMount } from 'svelte';
import saveResponse from "./saveResponse.js";
export let quiz;
let resp;
onMount(async () => {
 try {
resp = await saveResponse(quiz);
//  console.log("resp", resp);

 } catch (error) {
    console.error(error);
  }
}); 

</script>


<h1>GoodBye</h1>
{resp.quizId}
<!-- 
<h1>wrongAnswer</h1>
{#each resp.wrongAnswers as wrongAnswer}
    <h1>{wrongAnswer}</h1>
{/each} -->
<!-- 
<h1>skippedAnswers</h1>
{#each resp.skippedAnswers as skippedAnswer}
    <h1>{skippedAnswer}</h1>
{/each}

<h1>correctAnswer</h1>
{#each resp.correctAnswers as correctAnswer}
    <h1>{correctAnswer}</h1>
{/each} -->
