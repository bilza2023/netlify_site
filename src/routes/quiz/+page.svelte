<script>
import { onMount } from 'svelte';
let quizes = [];

onMount(async () => {
 try {
    const response = await fetch('http://localhost/quizlist');
    const data = await response.json();
    quizes = data.quizes;
    console.log("quizes", quizes);
  // showQuestionCard(0);  
  } catch (error) {
    console.error(error);
  }
}); 

</script>


{#each quizes as quiz }
<a href={`/quiz/show/${quiz._id}`}>{quiz._id}</a>

{/each}