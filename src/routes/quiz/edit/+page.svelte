<script>
import { onMount } from 'svelte';
import save from "./save.js";
import update from "./update.js";
import { v4 as uuidv4 } from 'uuid';
import Question from './Question.svelte';
import Errors from './Errors.svelte';
import {getQuiz, getQuestion , getOption} from "./new_quiz.js";
import QuizBlock from "./QuizBlock.svelte";

import { page } from '$app/stores';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import LoadBtn from '$lib/cmp/LoadBtn.svelte';
let isLoading = false;
///////////////////////////////////////////////////
///////////////////////////////////////////////////
let quiz;
let questions;
let members;
let errors_Array = [];
let showErrors = false;
let isDirty = true;
const set_errors_Array = (arr)=> {errors_Array = arr;showErrors = true;}

onMount(async () => {
  const  quizId = new URLSearchParams(location.search).get("quizId");

  const resp = await fetch( `${BASE_URL}/quiz/find` , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {token : "fdee087980kjk" ,quizId} )
    });
  const {incommingQuiz, incommingMembers, status } = await resp.json();
  // debugger;
  quiz = incommingQuiz;
  questions = incommingQuiz.questions;
  members = incommingMembers;
}); //onMount

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

const deleteQuestion = (q_index)=>{
  quiz.questions.splice( q_index , 1 );
  quiz = quiz;
}
const deleteOption = (q_index,option_index)=>{
  quiz.questions[q_index].options.splice(option_index, 1);
  quiz = quiz;
}

const saveMain = async ()=>{
  isLoading = true; 
  // debugger;
  const resp = await fetch( `${BASE_URL}/quiz/update` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {quiz} )
    });

      const {updatedQuiz, code} = await resp.json();
        if (code == 0) { 
            isLoading = false; 
            toast.push('saved...'); 
        }else {
            isLoading = false;
            toast.push('failed to save!');
        }
}//main save ends


</script>



{#if !quiz}
<h1>Loading...</h1>
{/if}

{#if quiz}
<br>
<br>

<p class="underline  ">Quiz</p>

<LoadBtn {isLoading} eventHandler={saveMain} title="Save"  class="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto" />


<br>


<QuizBlock {quiz} {set_errors_Array} {members} />
{/if}



{#if showErrors==true}
<div class="p-2 m-2 bg-gray-600 border-white border-2 rounded-md">
<Errors {errors_Array}/>
<button 
class="bg-gray-700 rounded-md m-1 p-1  hover:bg-gray-600 active:bg-gray-800"
on:click={()=>showErrors = false}>Hide</button>
</div>
{/if}




<br>
{#if quiz && quiz.questions && quiz.questions.length > 0}
<br>
    
{#each quiz.questions as question, index }
<p class="underline">Question : {`${index + 1}`}</p>
<Question {question} {addOption} {index} {deleteOption} {deleteQuestion}/>
<br>
{/each}
{/if}


<br>
{#if quiz}

<button class="flex items-center bg-green-700 rounded-sm m-2 p-2 border-green-300 border-2 hover:bg-green-600 active:bg-green-800"
   on:click={addQuestion} 
>
  <span class="text-white mr-2">Add New Question</span>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 2v20m10-10H2" stroke="white" stroke-width="3" fill="none"/>
  </svg>
</button>
<br>

{/if}