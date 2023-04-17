<script>
import { onMount } from 'svelte';
import check from "./check.js";
import Errors from './Errors.svelte';
export let quiz;
export let questions;
export let save;
export let toggleShowSettings;
export let showSettings;
let errors_Array = [];
let showErrors = false;
const set_errors_Array = (arr)=> {errors_Array = arr;showErrors = true;}
onMount(async ()=>{

  try {
    //   const token = await localStorage.getItem("token");
        // console.log("Toolbar",quiz);
    } catch (error) {
      // console.error(error);
    }
});

function tooglePublish(){
      showErrors = false ; //start with this
  if (quiz.published == true){
      quiz.published = false;
      return;
  }
  if (quiz.published == false){
      //--when ever check sync quiz.questions and questions
      quiz.questions = questions;
      const errors_Array =  check(quiz);
    if (errors_Array.length !==0) {
      set_errors_Array(errors_Array);
      quiz.published = false;
    }else {
      quiz.published = true;
    }
  }
// console.log("quiz.published",quiz.published);  
}
</script>




<div class="flex justify-left p-2 bg-gray-400 gap-2">
  <div class="w-16">
  
    <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
    on:click={save}
    >
      <span class="text-2xl">💾</span>
      <span class="text-sm font-medium text-white">Save</span>
    </button>
  </div>
 
  <div class="w-16">
    <a href= {`/show?quizId=${quiz._id}`} >
    <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
      <span class="text-2xl">🚀</span>
      <span class="text-sm font-medium text-white">Launch</span>
    </button>
    </a>
  </div>

<div class="w-24">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={()=>{tooglePublish()}}>
    <span class="text-2xl">📤</span>
    <span class="text-sm font-medium 
    {quiz.published == true ? "text-green-400" : "text-red-400"}
    ">Publish</span>
  </button>
</div>




<div class="w-24">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={toggleShowSettings}  >
    <span class="text-2xl">⚙️</span>
    <span class="text-sm font-medium 
    { showSettings == true ? "text-green-400" : "text-red-400"}" 
    >Settings</span>
  </button>
</div>



<div class="w-24">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
    <span class="text-2xl">🐑</span>
    <span class="text-sm font-medium text-white">Clone</span>
  </button>
</div>

<div class="w-24">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
    <span class="text-2xl">🗑️</span>
    <span class="text-sm font-medium text-white">Delete</span>
  </button>
</div>

<div class="w-24">
<a href= {`/analytics?quizId=${quiz._id}`} >
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
    <span class="text-2xl">📊</span>
    <span class="text-sm font-medium text-white">Analytics</span>
  </button>
  </a>
</div>

<div class="w-24">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
    <span class="text-2xl">🎨</span>
    <span class="text-sm font-medium text-white">Theme</span>
  </button>
</div>


<div class="w-24">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
    <span class="text-2xl">📄⚙️</span>
    <span class="text-sm font-medium text-white">Page</span>
  </button>
</div>


<div class="w-24">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
    <span class="text-2xl">📱</span>
    <span class="text-sm font-medium text-white">Share</span>
  </button>
</div>

</div>



{#if showErrors==true}
<div class="p-2 m-2 bg-gray-600 border-white border-2 rounded-md">
<Errors {errors_Array}/>
<button 
class="bg-gray-700 rounded-md m-1 p-1  hover:bg-gray-600 active:bg-gray-800"
on:click={()=>showErrors = false}>Hide</button>
</div>
{/if}
