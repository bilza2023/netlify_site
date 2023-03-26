In my svelte application
I have +page.svelte : it has questions array. code ==>
<script>
import { onMount } from 'svelte';
import save from "./save.js";
import update from "./update.js";
import { v4 as uuidv4 } from 'uuid';
import Question from './Question.svelte';
import Errors from './Errors.svelte';
import {getQuiz, getQuestion , getOption} from "./new_quiz.js";
import QuizBlock from "./QuizBlock.svelte";
import check from "./check.js";
import { page } from '$app/stores';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import LoadBtn from '$lib/cmp/LoadBtn.svelte';
let isLoading = false;
///////////////////////////////////////////////////
///////////////////////////////////////////////////
let quiz;
let questions;
let errors_Array = [];
let showErrors = false;


onMount(async () => {
// console.log(BASE_URL);
const  quizId = new URLSearchParams(location.search).get("quizId");

const resp = await fetch( `${BASE_URL}/quiz/find` , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {token : "fdee087980kjk" ,quizId} )
    });
    const incommingQuiz = await resp.json();
  quiz = incommingQuiz.quiz;
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

const deleteQuestion = (q_index)=>{
  quiz.questions.splice( q_index , 1 );
  quiz = quiz;
}
const deleteOption = (q_index,option_index)=>{
  quiz.questions[q_index].options.splice(option_index, 1);
  quiz = quiz;
}
const saveMain = async ()=>{
errors_Array = check(quiz);
    if ( errors_Array.length > 0){
        showErrors = true;
      return;
    }
//----------
isLoading = true; 

const resp = await fetch( `${BASE_URL}/quiz/update` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {quiz} )
    });
      const {updatedQuiz, status} = await resp.json();
        if (status == "ok") { 
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
<p class="underline">Quiz</p>
<br>
<QuizBlock {quiz}/>
{/if}

<br>
{#if quiz && quiz.questions && quiz.questions.length > 0}
<br>
<p class="underline">Questions</p>
    
{#each quiz.questions as question, qIndex }
<Question {question} {addOption} {qIndex} {deleteOption}/>
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

{#if showErrors==true}
<div class="p-2 m-2 bg-gray-600 border-white border-2 rounded-md">
<Errors {errors_Array}/>
<button 
class="bg-gray-700 rounded-md m-1 p-1  hover:bg-gray-600 active:bg-gray-800"
on:click={()=>showErrors = false}>Hide</button>
</div>
{/if}

<LoadBtn {isLoading} eventHandler={saveMain} title="Save"  class="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto" />

{/if}

This has question component : code==>
<script>
import Thq from "./Thq.svelte";
import FormRow from "./FormRow.svelte";
import { fade } from 'svelte/transition';
export let question;
export let addOption;
export let deleteOption;
export let qIndex;

const mark_correct = (option_id)=>{
question.correctOption = option_id;
}

</script>

<Thq title={question.content} >

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >


<FormRow title="Question">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={question.content} >
</FormRow>

<br/>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex bg-green-600 m-2 p-2 w-2/12 rounded-sm focus:outline-none active:bg-green-400 hover:bg-green-500 hover:cursor-pointer"
on:click={()=>addOption(qIndex)}
>
<span class="">Options</span> &nbsp;&nbsp;&nbsp;&nbsp;
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 2v20m10-10H2" stroke="white" stroke-width="3" fill="none"/>
</svg>
</div>

<br/>

    <div class="text-center">
    {#each question.options as option , option_index }
      <div class="flex mb-1 border-2 border-gray-400 mx-10">    
          
          <input
          class="bg-gray-500 text-white w-8/12 " 
          type="text" bind:value={option.content} 
          />
          
          {#if question.correctOption==option.id}
          <button class="w-2/12 bg-green-600 rounded-sm focus:outline-none active:bg-green-400 hover:bg-green-500 hover:cursor-pointer mx-2 my-1"
          on:click={mark_correct(option.id)}>
          Mark Correct
          </button>
          {:else}
          <button class="w-2/12 bg-gray-600 rounded-sm focus:outline-none active:bg-gray-400 hover:bg-gray-500 hover:cursor-pointer mx-2 my-1"
          on:click={mark_correct(option.id)}>
          Mark Correct
          </button>
          {/if}
          
<button class="w-2/12 bg-red-600 rounded-sm focus:outline-none active:bg-red-400 hover:bg-red-500 hover:cursor-pointer mx-2 my-1"
          on:click={()=>deleteOption(qIndex,option_index)}>
          Delete
</button>

    </div>
    {/each}
    </div>

</div>

</Thq>

inside this we have Thq component ==>
<script>
export let title;
export let visible = true;
import AreYouSure from "$lib/cmp/AreYouSure.svelte";
const  toggleVisibility = ()=> visible = !visible;
</script>

<div class="flex  rounded-t-lg border border-gray-400 p-0">

     <div class="  text-center w-full p-2">
        {title} 
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="rounded-t-lg border border-gray-400 p-2 
    hover:cursor-pointer"
    on:click={toggleVisibility}    
    >
        {visible == true ? "Hide" : "Show" }
    </div>
    
    <AreYouSure />
    
</div>


{#if visible==true}
<slot></slot>
{/if}

inside this i have AreYouSure.svelte comp : code==>
<script>
let trigger = false;

const fire = ()=> {
trigger = true;
setTimeout( ()=> trigger=false,2000);
}

</script>

{#if trigger == false}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="rounded-t-lg  border border-gray-800 p-2 bg-red-800 
    hover:cursor-pointer"  on:click={fire} >
        Delete
    </div>
{:else}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="rounded-t-lg  border border-gray-800 p-2 bg-pink-800 
    hover:cursor-pointer"  on:click={fire} >
        Sure?
    </div>
{/if}    

How do i use a store to delete a question from AreYouSure component?