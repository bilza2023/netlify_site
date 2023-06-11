<script>
////////////-store variables--///////
import { quizStore , membersStore } from '../store';

quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = Object.values(value));
$: quiz = $quizStore; 
$: members = $membersStore;

////////////-store variables--///////

import Clone from "./Clone.svelte";
import QuizDel from "./QuizDel.svelte";
// import RunErrors from './runBtn/RunErrors.svelte';
import RunBtn from './runBtn/RunBtn.svelte';
import RunBtnDivs from './runBtn/RunBtnDivs.svelte';
import SaveBtn from './SaveBtn.svelte';


export let toggleShowSettings;
export let showSettings;


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

<SaveBtn />  
  
 

<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={toggleShowSettings}  >
    <span class="text-2xl">⚙️</span>
    <span class="text-sm font-medium 
    { showSettings == true ? "text-green-400" : "text-red-400"}" 
    >Settings</span>
  </button>
</div>


<RunBtn />



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


<!-- <div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900">
    <span class="text-2xl">📱</span>
    <span class="text-sm font-medium text-white">Share</span>
  </button>
</div> -->

</div>

<!---The divs which are out of the toolbar div-->

<div class="w-full bg-gray-800">

<RunBtnDivs />

{#if showClone == true}
<Clone  {quiz} {toggleShowClone}/>
{/if}''

{#if showQuizDel == true}
<QuizDel  {quiz} {toggleshowQuizDel}/>
{/if}

</div>