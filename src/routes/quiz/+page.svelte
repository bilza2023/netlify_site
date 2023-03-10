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
<a class ="bg-gray-900 p-2 m-2 border-2 border-white" href={`/quiz/show/${quiz._id}`}>{quiz.title}</a>

{/each}