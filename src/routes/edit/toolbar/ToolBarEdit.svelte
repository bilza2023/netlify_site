<script>
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
// $: showClone = $showCloneStore;
let showClone;
$: {
  showClone = $showCloneStore;
}
let showQuizDel;
$: {
  showQuizDel = $showQuizDelStore;
}
showErrorsStore.set(false);
 
 
</script>

<ToolBar>


<ToolBarBtn  icon={"💾"} title="Save" tf={true} trueColor={"text-white"} clk={save}  />


<ToolBarBtn  icon={"🧪"} title="Test"  tf={showTest} trueColor={"text-white"}  
clk={()=> showTestStore.set(!$showTestStore) } falseColor={"text-gray-600"}/>

<ToolBarBtn  icon={"🐑"} title="Clone" tf={showClone} trueColor={"text-white"}  falseColor={"text-gray-600"}
clk={()=> showCloneStore.set(!$showCloneStore)} />

<ToolBarBtn  icon={"🗑️"} title="Delete" tf={showQuizDel} trueColor= {"text-white"} falseColor={"text-gray-600"}
 clk={()=>showQuizDelStore.set(!$showCloneStore) } />

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