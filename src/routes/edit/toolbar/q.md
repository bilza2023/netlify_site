this is a svelte app. 

here is store.js;
import { writable } from 'svelte/store';

//---The The Main Products
export const showTestStore = writable(false);
export const showCloneStore = writable(false);
export const showQuizDelStore = writable(false);
export const showErrorsStore = writable(false);
export const errorsArrayStore = writable([]);


page.svelte

<script>
 
import  Nav from '$lib/nav/Nav.svelte';
import  Footer from '$lib/cmp/Footer.svelte';
import  HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';  
import  QuizBlock from './QuizBlock.svelte';  
import  { toast } from '@zerodevx/svelte-toast';
import  { onMount } from 'svelte';
import  Questions from './showQuestions/Questions.svelte';
import  AddQuestionBar from './addQuestions/AddQuestionBar.svelte';
import ToolBarEdit from './toolbar/ToolBarEdit.svelte';
import ShowOne from './ShowOne.svelte';

// import Loading from '$lib/cmp/Loading.svelte';
import { loadApp } from "$lib/communicator/communicator";

import { templatesStore , appLoadedStore} from '../appStore.js';
// import { showTest,showClone,showQuizDel,showErrors,errorsArrayStore} from './store';

//-----------------------------------------------
let template;
let quizId;
  //===================== 
$: appLoaded = $appLoadedStore; 
 //===================== 


import { getDataUrl,getDataPassword,getDataParagraph,getDataNumber,getDataInput,getDataEmail,getDataMCQ,getDataBaseMCQ, getMcqWOption, getSurvey} from "$lib/globals/questionTypesData";


onMount(async ()=>{
  try {
        // debugger;
         await loadApp();
      if (appLoaded==false){
        toast.push('App Data Not loaded')
      } 
        quizId = new URLSearchParams(location.search).get("quizId");
      template  = await $templatesStore.find(item => item._id === quizId);
      // template = {...tmp};
 
      // console.log(template);
      //----------------------------------
    } catch (error) {
      // console.error(error);
    }
});
/////////////////////////////////////////
const addMCQ = () => {
  const qs = getDataMCQ();
  template.questions  = [...template.questions,qs];
}

</script>

<Nav/>
<div class="bg-gray-800">

<ToolBarEdit {template}   />
<ShowOne  {template}/>



<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">


<HdgWithIcon title="Edit Template" , icon ="📜"/>

{#if template}
<br>
<QuizBlock  {template}/>
<Questions {template}/>
  
<br/>
<AddQuestionBar  {addMCQ}/>

{/if} 
<br>
<br> 
<br>
<br> 
<br>
<br> 
<br>
<br> 
<br>
<br> 
</div><!--app-->


<Footer /> 
</div> <!--just the gray div-->

here is toolbaredit.svelte

<script>
////////////-store variables--///////
import Agent from "../../../lib/communicator/Agent";
import { fade } from 'svelte/transition';
import { toast } from '@zerodevx/svelte-toast';

import PublishErrors from './PublishErrors.svelte';

// import save from "./save";
import ToolBar from '$lib/toolbar/ToolBar.svelte';
import ToolBarBtn from '$lib/toolbar/ToolBarBtn.svelte';
import LocalStorage from "../../../lib/communicator/localStorage";

import { showTestStore ,showCloneStore,showQuizDelStore,
showErrorsStore,errorsArrayStore} from '../store';
////////////// 
import { templatesStore} from '../../appStore.js';
$: templates = $templatesStore; 
export let template;


const save = async ()=>{
  debugger;
 const resp = await Agent.update('template',{item: template});

  if (resp.ok) {
      const data = await resp.json();
      LocalStorage.updateTemplates();

      toast.push( "saved" );
  }else {
      const data = await resp.json();

      toast.push( data.message );
  }

}

</script>

<ToolBar>


<ToolBarBtn  icon={"💾"} title="Save" tf={true} trueColor={"text-white"} clk={save}  />


<ToolBarBtn  icon={"🧪"} title="Test"  tf={false} trueColor={"text-white"}  
 falseColor={"text-gray-600"} clk={()=>showTestStore.set(true) }/>

<ToolBarBtn  icon={"🐑"} title="Clone" tf={false} trueColor={"text-white"}  falseColor={"text-gray-600"}
/>

<ToolBarBtn  icon={"🗑️"} title="Delete" tf={false} trueColor= {"text-white"} falseColor={"text-gray-600"}
/>

</ToolBar>


HERE IS showOne.svelte

<script>
import { fade } from 'svelte/transition';
import PublishErrors from './toolbar/PublishErrors.svelte';
import {get} from 'svelte/store'
// import Clone from "./Clone.svelte";
import MakeTest from "./MakeTest.svelte";
// import QuizDel from "./QuizDel.svelte";

export let template;

import { showTestStore ,showCloneStore,showQuizDelStore,
showErrorsStore,errorsArrayStore} from './store';
</script>


<!---The divs which are out of the toolbar div-->

<div class="w-full bg-gray-800">

{#if get( showErrorsStore  ) }
  <!-- <HideIfNot ifNot={showErrors}> -->
  <div class="p-2 m-2 bg-gray-600 border-white border-2 rounded-md"
  in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} >
  <PublishErrors />
  <button 
  class="bg-gray-700 rounded-md m-1 p-1  hover:bg-gray-600 active:bg-gray-800"
  on:click={()=>showErrorsStore.set(false)}>Hide</button>
  </div>
{/if}


{#if get(showCloneStore) == true}
  <h1>Clone</h1>
{/if}

{#if get(showTestStore) == true}
  <!-- <MakeTest  {template}  /> -->
  <div class="text-white">MakeTest MakeTest MakeTest MakeTest MakeTest </div>
{/if}

{#if get(showQuizDelStore) == true}
  <!-- <QuizDel  {quiz} /> -->
  <h1>QuizDel</h1>
{/if}

</div>

THE PROBLEM IS THAT WHEN I CLICK TEST BUTTON THE test div does not show