<script>
import { onMount } from 'svelte';
  import { page } from '$app/stores';
import saveResponse from "./saveResponse.js";
  // console.log($page.params)

  let currentQuestionIndex = 0;
let quiz;
let questions =[];
let quizId;

  function showQuestionCard(index) {
    const questionCards = document.querySelectorAll(".questionCard");
    questionCards.forEach((card) => {
      card.style.display = "none";
    });
    questionCards[index].style.display = "block";
  }

  function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestionCard(currentQuestionIndex);
    }
  }

  function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestionCard(currentQuestionIndex);
    }
  }

onMount(async () => {
 try {
  //  console.log("page",page);
  let { quizId } = $page.params;

    const response = await fetch(`http://localhost/quiz/${quizId}`);
    const data = await response.json();
    quiz = data.quiz;
    questions = quiz.questions;
    console.log("questions",questions);
    console.log("quiz",quiz);
  // showQuestionCard(0);  
  } catch (error) {
    console.error(error);
  }
}); 


</script>


<div id="card" class="flex flex-col items-center justify-center rounded-lg shadow-lg bg-green-100  p-6 mx-auto sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">


{#each questions  as question, qIndex }
    
<div class="questionCard"   id={qIndex}>
  <h1 class="bg-red-900 rounded-sm p-2 m-2">{question.content}</h1>
  <br />
 <ol>
  {#each question.options as option }
    <button 
      on:click={()=>question.selectedOptionId = option.id}
      class="block w-full py-2 px-4 text-left bg-gray-800 hover:bg-green-800 focus:bg-green-800 text-red-200 focus:outline-none rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
    >{option.content}</button>
    <br/>
  {/each}
</ol>

</div>

{/each}


<div class="flex justify-between py-4">
  <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline"
    on:click={showPreviousQuestion}
  >
    <svg class="w-6 h-6 fill-current mr-2" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12H20V10H10.83l4.58-4.59z" />
    </svg>
    <span>Previous</span>
  </button>
  &nbsp;
  <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline"
    on:click={()=>saveResponse(quiz)}
  > 
    <svg class="w-6 h-6 fill-current mr-2" viewBox="0 0 24 24">
      <path d="M16.59 6l-5.3-5.3C11.16.21 10.91 0 10.59 0H3C1.9 0 1.01.9 1.01 2L1 22c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V8c0-.31-.21-.56-.5-.66L16.59 6zM5 18V9h2v9H5zm3 0V9h2v9H8zm3 0V9h2v9h-2zm3 0V9h2v9h-2z"/>
    </svg>
    <span>Print</span>
  </button>

  &nbsp;

  <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline"
    on:click={showNextQuestion}
  >
    <span>Next</span>
    <svg class="w-6 h-6 fill-current ml-2" viewBox="0 0 24 24">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41L12.83 13H4v-2h8.83l-4.24-4.24z" />
    </svg>
  </button>
</div>


</div>