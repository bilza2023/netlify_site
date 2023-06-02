<script>
////////////-store variables--///////
import { quizStore , membersStore } from '../store';
quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = Object.values(value));
$: quiz = $quizStore; 
$: members = $membersStore;
////////////-store variables--///////

import check from "./check.js";
import Clone from "./Clone.svelte";
import { fade } from 'svelte/transition';
import QuizDel from "./QuizDel.svelte";
import Errors from './Errors.svelte';
import save from "./save.js";
// export let quiz;
// export let questions;
// export let save;
export let toggleShowSettings;
export let showSettings;
let errors_Array = [];
let showErrors = false;
const set_errors_Array = (arr)=> {errors_Array = arr;showErrors = true;}


function tooglePublish(){
      showErrors = false ; //start with this
  if (quiz.published == true){
        quizStore.update(currentQuiz => ({ ...currentQuiz, published: false }));
      return;
  }
  if (quiz.published == false){
      const errors_Array =  check(quiz);
    if (errors_Array.length !==0) {
      set_errors_Array(errors_Array);
      // quiz.published = false;
        quizStore.update(currentQuiz => ({ ...currentQuiz, published: false }));
    }else {
      quiz.published = true;
        quizStore.update(currentQuiz => ({ ...currentQuiz, published: true }));
    }
  }
// console.log("quiz.published",quiz.published);  
}

let showClone = false;
function toggleShowClone(){
  showClone = !showClone;
}

let showQuizDel = false;
function toggleshowQuizDel(){
  showQuizDel = !showQuizDel;
}
</script>




<div class="flex justify-left   items-center bg-gray-400 px-2  py-2 gap-2  ">

<div class="w-20">
  
    <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
    on:click={()=>save({survey:quiz})}
    >
      <span class="text-2xl">💾</span>
      <span class="text-sm font-medium text-white">Save</span>
    </button>
  </div>
 
  <div class="w-20">
    <a href= {`/show?quizId=${quiz._id}`} >
    <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
      <span class="text-2xl">🚀</span>
      <span class="text-sm font-medium text-white">Launch</span>
    </button>
    </a>
  </div>

<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={()=>{tooglePublish()}}>
    <span class="text-2xl">📤</span>
    <span class="text-sm font-medium 
    {quiz.published == true ? "text-green-400" : "text-red-400"}
    ">Publish</span>
  </button>
</div>




<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={toggleShowSettings}  >
    <span class="text-2xl">⚙️</span>
    <span class="text-sm font-medium 
    { showSettings == true ? "text-green-400" : "text-red-400"}" 
    >Settings</span>
  </button>
</div>



<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={toggleShowClone} >
    <span class="text-2xl">🐑</span>
    <span class="text-sm font-medium text-white">Clone</span>
  </button>
</div>

<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={()=>{toggleshowQuizDel()}}>
    <span class="text-2xl">🗑️</span>
    <span class="text-sm font-medium text-white">Delete</span>
  </button>
</div>

<div class="w-20">
<a href= {`/analytics?quizId=${quiz._id}`} >
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
    <span class="text-2xl">📊</span>
    <span class="text-sm font-medium text-white">Analytics</span>
  </button>
  </a>
</div>
<!--
<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
    <span class="text-2xl">🎨</span>
    <span class="text-sm font-medium text-white">Theme</span>
  </button>
</div>


<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
    <span class="text-2xl">📄⚙️</span>
    <span class="text-sm font-medium text-white">Page</span>
  </button>
</div>


<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
    <span class="text-2xl">📱</span>
    <span class="text-sm font-medium text-white">Share</span>
  </button>
</div>
-->

</div>

<!---The divs which are out of the toolbar div-->

<div class="w-full bg-gray-800">

{#if showErrors==true}
<div class="p-2 m-2 bg-gray-600 border-white border-2 rounded-md"
in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} >
<Errors {errors_Array}/>
<button 
class="bg-gray-700 rounded-md m-1 p-1  hover:bg-gray-600 active:bg-gray-800"
on:click={()=>showErrors = false}>Hide</button>
</div>
{/if}


{#if showClone == true}
<Clone  {quiz} {toggleShowClone}/>
{/if}

{#if showQuizDel == true}
<QuizDel  {quiz} {toggleshowQuizDel}/>
{/if}

</div>