This is a svelte component . in the onmount function

i have "quizId"obtained from the url.
The $templatesStore is a stvelte store component that has an array of items . now what i want to get item from this array where item._id == quizId.
and set it equal to 
$: template = XXXX; //===================== 

here is the code
<script>
 
import Questions from './showQuestions/Questions.svelte';
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';  
import QuizBlock from "./settings/QuizBlock.svelte";
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';

import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import ToolBarEdit from './toolbar/ToolBarEdit.svelte';

import AddQuestionBar from './addQuestions/AddQuestionBar.svelte';
import { onMount } from 'svelte';
import ajaxPost from "$lib/js/ajaxPost.js";
import Loading from '$lib/cmp/Loading.svelte';

import { templatesStore , appLoadedStore} from '../mainStore.js';
//-----------------------------------------------
$: template = XXXX; //===================== 
$: appLoaded = $appLoadedStore; //===================== 
//-----------------------------------------------
let isLoading = false;
let showSettings = true;


function toggleShowSettings(){
      showSettings = !showSettings;
}


onMount(async ()=>{

  try {
      const quizId = new URLSearchParams(location.search).get("quizId");
      //----------------------------------
   
          
    } catch (error) {
      // console.error(error);
    }
});
/////////////////////////////////////////
const save = async ()=>{

    isLoading = true; 
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

 
{#if quiz}
<ToolBarEdit  {save}  {toggleShowSettings}
{showSettings} />
{/if}



<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">

<HdgWithIcon title="Edit Template" , icon ="📜"/>


{#if !quiz}
<Loading  />
{/if}

{#if quiz}

<br>

      {#if showSettings}
      <QuizBlock  />
      {/if}
{/if}

<br>
<div class="w-full p-2 m-2 text-center bg-stone-700 rounded-md border-2 border-gray-500">
<h1>Questions</h1>
</div>
<br>
<Questions/>


<br>
{#if quiz}


<AddQuestionBar />


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


<style>
@media screen and (max-width: 640px) {
  .wrapper::before {
    content: "Please use a larger screen to view this web page";
    display: block;
    text-align: center;
    font-size: 24px;
    padding: 20px;
  }
}

</style>