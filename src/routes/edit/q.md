- I am creating a node.js express mongoose and mongodb app.
- This app is for creating and editing quiz tests. These quiz tests have questions in them which further has options.
- On my "Edit page" of my svelte app I download 1 quiz object from mongodb server and then eidt it to finally save it.
- The main object that is to be edited and contains all the data is quiz. 
Requirement : I want to setup my edit page such that when quiz object is obtained from server it is set to svelte store variable "quizStore" and then it is used from the store by all the children components. 

here are the segments of code. I have implemented this to some extent. Pleas ealso check the implementation.

+page.svelte:
<script>
import update from "./update.js";
import { v4 as uuidv4 } from 'uuid';
import Question from './question/Question.svelte';
import { getMCQ , getOption} from "./getMCQ.js";
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
import Loading from '$lib/cmp/Loading.svelte';

let quiz;
let members;
// let questions = [];
quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = Object.values(value));

let isLoading = false;
let showSettings = true;


function toggleShowSettings(){
      showSettings = !showSettings;
}

function unPublish(){
      quiz.published = false;
      // console.log("quiz.published",quiz.published);
}
onMount(async ()=>{

  try {
      // const token =  localStorage.getItem("token");    
      const quizId = new URLSearchParams(location.search).get("quizId");
             //----------------------------------

      const resp = await ajaxPost(`${BASE_URL}/quiz/find`,{quizId});
            // debugger;
                if (resp.ok == true) {
                const data = await resp.json();
                const {incommingQuiz, incommingMembers } = data;
            // debugger;
                  quizStore.update(() => ({ ... incommingQuiz }));
                  membersStore.update(() => ({ ...incommingMembers }));
                  //--these are user members and not quiz members
                  members = incommingMembers;
                }else {
                      toast.push("failed to open");
                }  
          
    } catch (error) {
      // console.error(error);
    }
});
///////////////////////////////////////////////////
async function  addQuestion (){
    const question   = getMCQ( uuidv4());
    quiz.questions.push(question);
    quiz = quiz; ///
    unPublish();
    toast.push("New Question Added!");
}

/////////////////////////////////////
async function deleteQuestion(id) {
    const index = quiz.questions.findIndex(question => question.id === id);
    if (index !== -1) {
        quiz.questions.splice(index, 1);
        quiz = quiz;    
    }
}
/////////////////////////////////////////

const save = async ()=>{
    isLoading = true; 
    //--Very important else the quiz.questions and the questions will be out of sync;
//     quiz.questions = questions;
    // debugger;
    const resp = await ajaxPost(`${BASE_URL}/quiz/update`,{quiz});
      if (resp.ok == true) {
            const data = await resp.json();
            isLoading = false; 
            toast.push("Quiz Saved"); 
        }else {
          const data = await resp.json();
      //     console.log(data);
            isLoading = false;
            toast.push("failed to save");
      }// if ends

}

const addOption = (qid)=>{
  const index = quiz.questions.findIndex(question => question.id === qid);
    if (index !== -1) {
        const op = getOption(); //get option    
        quiz.questions[index].options.push(op);
        quiz = quiz;    
            unPublish();
    }
}

//--instead of using index use id


function deleteOption(questionId, optionId) {
    // Find the question with the given questionId
    let question = quiz.questions.find(q => q.id === questionId);
    if (question) {
        // Find the index of the option with the given optionId
        let optionIndex = question.options.findIndex(o => o.id === optionId);
        if (optionIndex !== -1) {
            // Remove the option from the options array
            question.options.splice(optionIndex, 1);
              unPublish();
        }
    }
}

</script>

<Nav/>

 
{#if quiz}
<ToolBar {quiz} {save} questions={quiz.questions} {toggleShowSettings}
{showSettings} />
{/if}



<div class="bg-gray-800 text-white m-0 px-8  min-h-screen w-full">




{#if !quiz}
<Loading  />
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
{#if quiz.questions}
{#if quiz.questions.length > 0}
<br>


{#each quiz.questions as question, index }

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

store.js

import { writable } from 'svelte/store';

export const quizStore = writable({});
export const membersStore = writable([]);
export const pageState = writable('loading');

question.svelte:
<script>
import Thq from "./Thq.svelte";
import FormRow from "../FormRow.svelte";
import { fade } from 'svelte/transition';

export let question;
export let addOption;
export let deleteOption;
export let index;
export let deleteQuestion;
export let ser;
const mark_correct = (option_id)=>{
question.correctOption = option_id;
}

</script>

<Thq title={question.content} {deleteQuestion} id={question.id} {ser}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >


<FormRow title="Question">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={question.content} >
</FormRow>

<FormRow title="Explanation">
<textarea class="w-full bg-gray-700 color-white"
bind:value={question.explanation}></textarea>
</FormRow>

<br/>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex bg-green-600 m-2 p-2 w-2/12 rounded-sm focus:outline-none active:bg-green-400 hover:bg-green-500 hover:cursor-pointer"
on:click={()=>addOption(question.id)}
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
          <span class="text-xl white-icon">👍</span>  
          </button>
          {:else}
          <button class="w-2/12 bg-gray-600 rounded-sm focus:outline-none active:bg-green-900 hover:bg-green-500 hover:cursor-pointer mx-2 my-1"
          on:click={mark_correct(option.id)}>
          <span class="text-xl white-icon">👍</span>
          </button>
          {/if}
          
<button class="w-2/12 bg-gray-600 rounded-sm focus:outline-none active:bg-red-900 hover:bg-red-500 hover:cursor-pointer mx-2 my-1"
          on:click={()=>deleteOption(question.id,option.id)}>
          <span class="text-xl">🗑️</span>
</button>

    </div>
    {/each}
    </div>

</div>

</Thq>

I hop this gives you enough idea about the app