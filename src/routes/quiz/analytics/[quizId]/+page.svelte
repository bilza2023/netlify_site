<script>
import { onMount } from 'svelte';
  import { page } from '$app/stores';
let results=[];
 
onMount(async () => {
 try {
  //  console.log("page",page);
  let { quizId } = $page.params;
    const response = await fetch(`http://localhost/responses/${quizId}`);
    const data = await response.json();
    results = data.results;
    console.log("results",results);
  // quiz = data.quiz;
  // questions = quiz.questions;
  // console.log("questions",questions);
  // showQuestionCard(0);  
  } catch (error) {
    console.error(error);
  }
}); 

</script>

<h1>Quiz Responses</h1>

<ul>
  {#each results as result}
    <li>
      <p>Title: {result.quizId}</p>
      <p>Correct Answers: {result.correctAnswers.length}</p>
      <p>Wrong Answers: {result.wrongAnswers.length}</p>
      <p>Total Questions: {result.totalQuestions}</p>
    </li>
  {/each}
</ul>
