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
 
import Loading from '$lib/cmp/Loading.svelte';
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