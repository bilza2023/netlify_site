<script>
////////////-store variables--///////

import { fade } from 'svelte/transition';
// import Clone from "./Clone.svelte";
// import MakeTest from "./MakeTest.svelte";
// import QuizDel from "./QuizDel.svelte";
import PublishErrors from './PublishErrors.svelte';

// import save from "./save";
import ToolBar from '$lib/toolbar/ToolBar.svelte';
import ToolBarBtn from '$lib/toolbar/ToolBarBtn.svelte';
import HideIfNot from '$lib/cmp/HideIfNot.svelte';
export let template;


import { templatesStore} from '../../appStore.js';
$: templates = $templatesStore; 
const save = async ()=>{
  console.log('====save===:');
  console.log('template:' ,  template);
  console.log('templates:' ,  templates);
// localStorage.setItem('templates', JSON.stringify(templates));
 await localStorage.setItem('templates', JSON.stringify({}));
 await localStorage.setItem('templates', JSON.stringify(templates));
  // console.log('templates' , templates);
}

let showTest = true;
let showClone = true;
let showQuizDel = true;
let showErrors = false;
let errors_Array = [];
</script>

<ToolBar>


<ToolBarBtn  icon={"💾"} title="Save" tf={true} trueColor={"text-white"} clk={save}  />


<ToolBarBtn  icon={"🧪"} title="Test"  tf={showTest} trueColor={"text-white"}  
 falseColor={"text-gray-600"}/>

<ToolBarBtn  icon={"🐑"} title="Clone" tf={showClone} trueColor={"text-white"}  falseColor={"text-gray-600"}
/>

<ToolBarBtn  icon={"🗑️"} title="Delete" tf={showQuizDel} trueColor= {"text-white"} falseColor={"text-gray-600"}
/>

</ToolBar>


<!---The divs which are out of the toolbar div-->

<div class="w-full bg-gray-800">

{#if showErrors}
  <!-- <HideIfNot ifNot={showErrors}> -->
  <div class="p-2 m-2 bg-gray-600 border-white border-2 rounded-md"
  in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} >
  <PublishErrors {errors_Array} />
  <button 
  class="bg-gray-700 rounded-md m-1 p-1  hover:bg-gray-600 active:bg-gray-800"
  on:click={()=>console.log("log")}>Hide</button>
  </div>
{/if}


{#if showClone == true}
  <!-- <Clone  {quiz} /> -->
{/if}

{#if showTest == true}
  <!-- <MakeTest  {quiz}  /> -->
{/if}

<HideIfNot ifNot={showQuizDel}>
  <!-- <QuizDel  {quiz} /> -->
</HideIfNot>

</div>