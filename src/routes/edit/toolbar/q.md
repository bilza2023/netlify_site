here is my store.js in my svelte app


import { writable } from 'svelte/store';

export const quizStore = writable({});
export const membersStore = writable([]);
export const errorsArrayStore = writable([]);
export const pageState = writable('loading');

//--show variables for the toolbar
export const showErrorsStore = writable(false);
export const showTestStore = writable(false);
export const showCloneStore = writable(false);
export const showQuizDelStore = writable(false);


it has showCloneStore that i am using to hide and show a div in ToolBarEdit.svelte ==>
<script>
////////////-store variables--///////

////////////-store variables--///////

import Clone from "./Clone.svelte";
import MakeTest from "./MakeTest.svelte";
import { fade } from 'svelte/transition';
import QuizDel from "./QuizDel.svelte";
import PublishErrors from '../ErrorsArray/PublishErrors.svelte';

import save from "./save";
import ToolBar from '$lib/toolbar/ToolBar.svelte';
import HideIfNot from '$lib/cmp/HideIfNot.svelte';
import ToolBarBtn from '$lib/toolbar/ToolBarBtn.svelte';

import {quizStore ,showErrorsStore,showTestStore,showCloneStore,showQuizDelStore} from "../store";

$: quiz = $quizStore; 
$: showErrors = $showErrorsStore;
let showTest;
 $: {
  showTest = $showTestStore;
  // console.log("showTest:", showTest);
 }
$: showClone = $showCloneStore;
$: showQuizDel = $showQuizDelStore;
showErrorsStore.set(false);
 
 
</script>

<ToolBar>


<ToolBarBtn  icon={"💾"} title="Save" tf={true} trueColor={"text-white"} clk={save}  />


<ToolBarBtn  icon={"🚀"} title="Test"  tf={showTest} trueColor={"text-white"}  
clk={()=> showTestStore.set(!$showTestStore) } falseColor={"text-gray-600"}/>

<ToolBarBtn  icon={"🐑"} title="Clone" tf={showClone} trueColor={"text-white"}  falseColor={"text-gray-600"}
clk={()=> showClone = !showClone} />

<ToolBarBtn  icon={"🗑️"} title="Delete" tf={showQuizDel} trueColor= {"text-white"} falseColor={"text-gray-600"}
 clk={()=>showQuizDel = !showQuizDel } />

</ToolBar>


<!---The divs which are out of the toolbar div-->

<div class="w-full bg-gray-800">

{#if showErrors}
  <!-- <HideIfNot ifNot={showErrors}> -->
  <div class="p-2 m-2 bg-gray-600 border-white border-2 rounded-md"
  in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} >
  <PublishErrors />
  <button 
  class="bg-gray-700 rounded-md m-1 p-1  hover:bg-gray-600 active:bg-gray-800"
  on:click={()=>showErrorsStore.set(false)}>Hide</button>
  </div>
{/if}


{#if showClone == true}
  <Clone  {quiz} />
{/if}

{#if showTest == true}
  <MakeTest  {quiz}  />
{/if}

<HideIfNot ifNot={showQuizDel}>
  <QuizDel  {quiz} />
</HideIfNot>

</div>

Here is clone.svelte which uses this 
showCloneStore.set(false);return;
but nothing happes (the clone div is still visible)
<script>
import { toast } from '@zerodevx/svelte-toast';
import { BASE_URL } from '$lib/js/config.js';
import { fade } from 'svelte/transition';
import ajaxPost from '$lib/js/ajaxPost';
import {showCloneStore} from "../store";

export let quiz;

  let newPRojectName = "";

const handler = async(quizType)=>{
showCloneStore.set(false);return;
  // const token = localStorage.getItem('token');
  // quiz.questions = questions; //-update
  // debugger;
  const resp = await ajaxPost(`${BASE_URL}/template/clone` , { id : quiz._id ,title :newPRojectName});
  
  if (resp.ok) {
      newPRojectName = "";
      const data = await resp.json();
      // debugger;
      toast.push( "Cloned" );
      showCloneStore.set(false);

  }else {
      const data = await resp.json();

      toast.push( data.errormsg );
  }

}

</script>
<br/>

<div class="w-full  m-0 p-0"
in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>

<div class=" p-2  text-center  bg-gray-800 
rounded-md border-2 border-white ">

<h1 class="m-1 text-slate-200 text-2xl underline">Clone Title</h1>
<input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg"  type="text" bind:value={newPRojectName} >

<br/>

<button class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={()=>handler("quiz")}>Clone</button>

</div>
</div>