<script>
import update from "./update.js";
import { v4 as uuidv4 } from 'uuid';
import Question from './question/Question.svelte';
import {getQuiz, getQuestion , getOption} from "./new_quiz.js";
import QuizBlock from "./settings/QuizBlock.svelte";
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
// import { page } from '$app/stores';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import ToolBar from './toolbar/ToolBar.svelte';
import { onMount } from 'svelte';
import ajaxPost from "$lib/js/ajaxPost.js";
import { quizStore , membersStore } from './store';

let quiz;
let members;
let questions = [];
quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = Object.values(value));

let isLoading = false;
let showSettings = true;


let isDirty = true;
let isLogin=false;

function toggleShowSettings(){
      showSettings = !showSettings;
}

function unPublish(){
      quiz.published = false;
      // console.log("quiz.published",quiz.published);
}
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
// debugger;
                         quizStore.update(() => ({ ... incommingQuiz }));
                         membersStore.update(() => ({ ...incommingMembers }));
                         console.log("members",members);
                         questions = quiz.questions;
                         console.log("quiz",quiz);
                  //     quiz = incommingQuiz;
                  //     members = incommingMembers;
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
     unPublish();
      toast.push("New Question Added!");
  }else {
            const data = await resp.json();
            toast.push(data.msg);
      }
}
/////////////////////////////////////

/////////////////////////////////////
async function  deleteQuestion (questionId){
 const token = await localStorage.getItem("token");
  const resp = await ajaxPost(`${BASE_URL}/quiz/question/delete`,{quizId : quiz._id , questionId , token});
  // debugger;
      if (resp.ok == true) {
            const data = await resp.json();
            questions = data.questions;
            unPublish();
            toast.push("Question deleted");
            //maybe quiz.question = questions;
      }else {
            const data = await resp.json();
            toast.push(data.msg);
      }
}
/////////////////////////////////////////

const save = async ()=>{
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
  unPublish();
}


const deleteOption = (q_index,option_index)=>{
  questions[q_index].options.splice(option_index, 1);
  questions = questions;
  unPublish();
}

</script>

<Nav isLogin={isLogin}/>

 
{#if quiz}
<ToolBar {quiz} {save} {questions} {toggleShowSettings}
{showSettings} />
{/if}



<div class="bg-gray-800 text-white m-0 px-8  min-h-screen w-full">




{#if !quiz}
<h1>Loading...</h1>
{/if}

{#if quiz}
<br>
<br>


{#if isLoading == true}
<div class= "animate-spin w-8 h-8 border-white rounded-full border-b-8 mx-auto ">
</div>
{/if}

<br>

      {#if showSettings}
      <QuizBlock  />
      {/if}
{/if}







<br>
{#if questions}
{#if questions.length > 0}
<br>

<!--This is the QUESTION  block -->    
<!--This is the QUESTION  block -->    

{#each questions as question, index }

<Question 
            {question}  
            {index} 
            {deleteQuestion}
            {deleteOption}
            {addOption}
            ser={index}
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
