<script>
import { onMount } from 'svelte';
import { v4 as uuidv4 } from 'uuid';
import Question from './Question.svelte';
import {getQuiz, getQuestion , getOption} from "./new_quiz.js";
import QuizBlock from "./QuizBlock.svelte";
// import Tf from "./Tf.svelte";

let quiz;
let questions;


onMount(async () => {
quiz = getQuiz();
questions = quiz.questions;
// console.log(quiz);

});

const addQuestion = ()=>{
const q = getQuestion( uuidv4());
// console.log("addQuestion",q);
quiz.questions.push(q);
quiz = quiz;
}
</script>

<br/>
<!-- <Tf /> -->
{#if quiz}
<QuizBlock {quiz}/>
{/if}

<br>
{#if quiz && quiz.questions && quiz.questions.length > 0}
    
{#each quiz.questions as question }
<Question {question} />
{/each}
{/if}





<br>
<button class="flex items-center bg-green-700 rounded-sm m-2 p-2 border-green-300 border-2 hover:bg-green-600 active:bg-green-800"
   on:click={addQuestion} 
>
  <span class="text-white mr-2">Add New Question</span>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 2v20m10-10H2" stroke="white" stroke-width="3" fill="none"/>
  </svg>
</button>

