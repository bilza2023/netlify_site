The problem is that I have a svelte component ToolBarEdit.svelte which has a div that is shown and hidden depending upon a variable that is stored in .store.js file.

{#if showTest == true}
<!-- <HideIfNot ifNot={showTest}> -->
<MakeTest  {quiz}  />
<!-- </HideIfNot> -->
{/if}

I have another file MakeTest.svelte where is set the showTest but that does not hide / show the MakeTest div


ToolBarEdit.svelte
<script>
////////////-store variables--///////
import { quizStore , membersStore } from '../store';
quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = Object.values(value));
$: quiz = $quizStore; 
$: members = $membersStore;
////////////-store variables--///////

import Clone from "./Clone.svelte";
import MakeTest from "./MakeTest.svelte";
import { fade } from 'svelte/transition';
import QuizDel from "./QuizDel.svelte";
import PublishErrors from '../ErrorsArray/PublishErrors.svelte';
import {showErrorsStore,showTestStore,showCloneStore,showQuizDelStore} from "../store";
import save from "./save";
import ToolBar from '$lib/toolbar/ToolBar.svelte';
import HideIfNot from '$lib/cmp/HideIfNot.svelte';
import ToolBarBtn from '$lib/toolbar/ToolBarBtn.svelte';


$: showErrors = $showErrorsStore;
$: showTest = $showTestStore;
$: showClone = $showCloneStore;
$: showQuizDel = $showQuizDelStore;
showErrorsStore.set(false);
 
 
</script>

<ToolBar>


<ToolBarBtn  icon={"💾"} title="Save" tf={true} trueColor={"text-white"} clk={save}  />


<ToolBarBtn  icon={"🚀"} title="Test"  tf={showTest} trueColor={"text-white"}  
clk={()=> showTest = !showTest } falseColor={"text-gray-600"}/>

<ToolBarBtn  icon={"🐑"} title="Clone" tf={showClone} trueColor={"text-white"}  falseColor={"text-gray-600"}
clk={()=> showClone = !showClone} />

<ToolBarBtn  icon={"🗑️"} title="Delete" tf={showQuizDel} trueColor={"text-white"} falseColor={"text-gray-600"}
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
<!-- </HideIfNot> -->

<HideIfNot ifNot={showClone}>
<Clone  {quiz} />
</HideIfNot>

{#if showTest == true}
<!-- <HideIfNot ifNot={showTest}> -->
<MakeTest  {quiz}  />
<!-- </HideIfNot> -->
{/if}

<HideIfNot ifNot={showQuizDel}>
<QuizDel  {quiz} />
</HideIfNot>


</div>
MakeTest.svelte
<script>
import { toast } from '@zerodevx/svelte-toast';
import { BASE_URL } from '$lib/js/config.js';
import { fade } from 'svelte/transition';
import ajaxPost from '$lib/js/ajaxPost';
import checkBeforePub from "../check/checkBeforePub";
export let quiz;
// export let openDivFn;
// import {errorsArrayStore,showErrorsStore} from "../store.js";
import {showErrorsStore,errorsArrayStore,showTestStore,showCloneStore,showQuizDelStore} from "../store";
  let newPRojectName = "";

const handler = async(quizType)=>{
  showTestStore.set(false);return;
  const errorsArray = checkBeforePub(quiz);
  if (errorsArray.length > 0){
  errorsArrayStore.set(errorsArray);
  showErrorsStore.set(true);
  showTestStore.set(false);
  return;
  }
  
  const resp = await ajaxPost(`${BASE_URL}/survey/maketest` , { id : quiz._id ,title :newPRojectName});
  
  if (resp.ok) {
      newPRojectName = "";
      const data = await resp.json();
      // debugger;
      toast.push( "New Test Created" );

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

<h1 class="m-1 text-slate-200 text-2xl underline">New Test Title</h1>
<input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg"  type="text" bind:value={newPRojectName} >

<br/>

<button class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={()=>handler("quiz")}>Create Test</button>

</div>
</div>
store.js

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


