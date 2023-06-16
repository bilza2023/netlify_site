<script>

import Questions from './showQuestions/Questions.svelte';

import QuizBlock from "./settings/QuizBlock.svelte";
import Teams from "./settings/Teams.svelte";
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
// import { page } from '$app/stores';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import ToolBar from './toolbar/ToolBar.svelte';
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
      const resp = await ajaxPost(`${BASE_URL}/test/find`,{quizId});
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
/////////////////////////////////////////


</script>

<Nav/>

 
{#if quiz}
<ToolBar    {toggleShowSettings}
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
<Teams />
<br>
<!-- <Timings />
<br> -->


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