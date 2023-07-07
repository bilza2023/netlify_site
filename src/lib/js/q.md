
I have a problem regarding using array of objects as svelte store variables.

I have an array of objects called "templatesStore" in svelte store. I take out one item from this array of objects and then try to edit it BUT the edited part is not diplayed (i add question)


<script>

import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';  
import QuizBlock from './QuizBlock.svelte';  
import { toast } from '@zerodevx/svelte-toast';
import { onMount } from 'svelte';
import Questions from './showQuestions/Questions.svelte';
import AddQuestionBar from './addQuestions/AddQuestionBar.svelte';

// import ToolBarEdit from './toolbar/ToolBarEdit.svelte';
// import Loading from '$lib/cmp/Loading.svelte';

import { templatesStore , appLoadedStore} from '../mainStore.js';
//-----------------------------------------------
let template;
let quizId;
  //===================== 
$: appLoaded = $appLoadedStore; 
 //===================== 
import { getDataUrl,getDataPassword,getDataParagraph,getDataNumber,getDataInput,getDataEmail,getDataMCQ,getDataBaseMCQ, getMcqWOption, getSurvey} from "$lib/globals/questionTypesData";

onMount(async ()=>{
  try {
    //   debugger;
      if (appLoaded==false){
        toast.push('App Data Not loaded')
      }
        quizId = new URLSearchParams(location.search).get("quizId");
      template = await $templatesStore.find(item => item._id === quizId);
      console.log(template);
      //----------------------------------
    } catch (error) {
      // console.error(error);
    }
});
/////////////////////////////////////////

const save = async ()=>{

    // isLoading = true; 
  debugger;
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

</script>

<Nav/>

<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">


<HdgWithIcon title="Edit Template" , icon ="📜"/>

{#if template}
<br>
<QuizBlock  {template}/>
<!-- <Questions questions={template.questions}/> -->
{#each  template.questions as question }
  <h1>{question.content}</h1>
{/each}
  
<br/>
<!-- <AddQuestionBar  {template}/> -->

{/if} 

<button on:click={addMCQ} class='bg-gray-600 border-2 border-white p-2 m-2 rounded-md'>Add Question</button>

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