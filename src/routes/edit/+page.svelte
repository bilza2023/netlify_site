<script>
import save from "./save.js";
import update from "./update.js";
import { v4 as uuidv4 } from 'uuid';
import Question from './Question.svelte';
import Errors from './Errors.svelte';
import {getQuiz, getQuestion , getOption} from "./new_quiz.js";
import QuizBlock from "./QuizBlock.svelte";
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import { page } from '$app/stores';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import LoadBtn from './LoadBtn.svelte';
import { onMount } from 'svelte';
import ajaxPost from "$lib/js/ajaxPost.js";

let isLoading = false;
let quiz;
let questions = [];
let members;
let errors_Array = [];
let showErrors = false;
let isDirty = true;
let isLogin=false;

onMount(async ()=>{

  try {
      const token = await localStorage.getItem("token");
          if (token == null || token.length == 0) {
              isLogin = false;
          }else {
              isLogin = true;
              const  quizId = new URLSearchParams(location.search).get("quizId");
             //----------------------------------
            const resp = await ajaxPost(`${BASE_URL}/quiz/find`,
            {token ,quizId} );
            // debugger;
                if (resp.ok == true) {
                const data = await resp.json();
                      const {incommingQuiz, incommingMembers } = data;
                      quiz = incommingQuiz;
                      questions = quiz.questions;
                      members = incommingMembers;
                      // debugger;
                }else {
                      toast.push("failed to add");
                }  
          }
    } catch (error) {
      // console.error(error);
    }
});
///////////////////////////////////////////////////
async function  addQuestion (){
 const token = await localStorage.getItem("token");
    const question   = getQuestion( uuidv4());
    const op1 = getOption( uuidv4());
    const op2 = getOption( uuidv4());
    question.options.push(op1);
    question.options.push(op2);
  //----------------------------------
  const resp = await ajaxPost(`${BASE_URL}/quiz/question/new`,{question , quizId : quiz._id, token});
  
  if (resp.ok){
     const data = await resp.json();
     questions = data.questions;
      toast.push("New Question Added!");
  }else {
            const data = await resp.json();
            toast.push(data.msg);
      }
}
/////////////////////////////////////
const set_errors_Array = (arr)=> {errors_Array = arr;showErrors = true;}
/////////////////////////////////////
async function  deleteQuestion (questionId){
 const token = await localStorage.getItem("token");
  const resp = await ajaxPost(`${BASE_URL}/quiz/question/delete`,{quizId : quiz._id , questionId , token});
  // debugger;
      if (resp.ok == true) {
            const data = await resp.json();
            questions = data.questions;
            toast.push("Question deleted");
            //maybe quiz.question = questions;
      }else {
            const data = await resp.json();
            toast.push(data.msg);
      }
}
/////////////////////////////////////////

const saveMain = async ()=>{
 const token = await localStorage.getItem("token");
    isLoading = true; 
    //--Very important else the quiz.questions and the questions will be out of sync;
    quiz.questions = questions;
    // debugger;
    const resp = await ajaxPost(`${BASE_URL}/quiz/update`,{quiz,token});
      if (resp.ok == true) {
            const data = await resp.json();
            isLoading = false; 
            toast.push(data.msg); 
        }else {
          const data = await resp.json();
            isLoading = false;
            toast.push(data.msg);
      }// if ends

}

const addOption = (qId)=>{
  const op = getOption( uuidv4());
  questions[qId].options.push(op);
  questions = questions;
}


const deleteOption = (q_index,option_index)=>{
  questions[q_index].options.splice(option_index, 1);
  questions = questions;
}

</script>

<Nav isLogin={isLogin}/>
<div class="bg-gray-800 text-white m-0 py-0 px-6 min-h-screen">




{#if !quiz}
<h1>Loading...</h1>
{/if}

{#if quiz}
<br>
<br>



<LoadBtn {isLoading} eventHandler={saveMain} title="Save Quiz"   />


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
{#if questions}
{#if questions.length > 0}
<br>

<!--This is the QUESTION  block -->    
<!--This is the QUESTION  block -->    

{#each questions as question, index }
<p class="underline">Question : {`${index + 1}`}</p>
<Question 
            {question}  
            {index} 
            {deleteQuestion}
            {deleteOption}
            {addOption}
/>
<br>
{/each}
{/if}
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



<br>
<br> 
</div><!--app-->


<Footer />
