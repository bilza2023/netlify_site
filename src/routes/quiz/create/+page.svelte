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
const op1 = getOption( uuidv4());
const op2 = getOption( uuidv4());
q.options.push(op1);
q.options.push(op2);
quiz.questions.push(q);
quiz = quiz;
}
const addOption = (qId)=>{
const op = getOption( uuidv4());
quiz.questions[qId].options.push(op);
quiz = quiz;
}
const deleteOption = (q_index,option_index)=>{
quiz.questions[q_index].options.splice(option_index, 1);
quiz = quiz;
}
</script>

<p class="underline">Quiz</p>
<br>
<!-- <Tf /> -->
{#if quiz}
<QuizBlock {quiz}/>
{/if}

<br>
<p class="underline">Questions</p>
<br>
{#if quiz && quiz.questions && quiz.questions.length > 0}
    
{#each quiz.questions as question, qIndex }
<Question {question} {addOption} {qIndex} {deleteOption}/>
<br>
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

