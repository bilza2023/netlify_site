<script>

import Questions from './showQuestions/Questions.svelte';

import QuizBlock from "./settings/QuizBlock.svelte";
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
// import { page } from '$app/stores';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import ToolBarEdit from './toolbar/ToolBarEdit.svelte';

import AddQuestionBar from './addQuestions/AddQuestionBar.svelte';
import { onMount } from 'svelte';
import ajaxPost from "$lib/js/ajaxPost.js";
import Loading from '$lib/cmp/Loading.svelte';

////////////-store variables--///////
import { quizStore , membersStore } from './store';
quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = Object.values(value));
$: quiz = $quizStore; 
$: members = $membersStore;
////////////-store variables--///////

let isLoading = false;
let showSettings = true;


function toggleShowSettings(){
      showSettings = !showSettings;
}


onMount(async ()=>{

  try {
      const quizId = new URLSearchParams(location.search).get("quizId");
             //----------------------------------

      const resp = await ajaxPost(`${BASE_URL}/survey/find`,{quizId});
            // debugger;
                if (resp.ok == true) {
                const data = await resp.json();
                const {incommingQuiz, incommingMembers } = data;
            // debugger;
                  quizStore.set(incommingQuiz);
                  membersStore.set(incommingMembers);
                  //--these are user members and not quiz members
                }else {
                      toast.push("failed to open");
                }  
          
    } catch (error) {
      // console.error(error);
    }
});
///////////////////////////////////////////////////

/////////////////////////////////////

/////////////////////////////////////////

const save = async ()=>{

    isLoading = true; 
 //  debugger;
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




{#if !quiz}
<Loading  />
{/if}

{#if quiz}
<br>
<br>


<br>

      {#if showSettings}
      <QuizBlock  />
      {/if}
{/if}

<br>
<div class="w-full p-2 m-2 text-center bg-gray-700 rounded-md border-2 border-gray-500">
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