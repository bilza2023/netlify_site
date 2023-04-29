<script>
import { v4 as uuidv4 } from 'uuid';
import Questions from './questions/Questions.svelte';
import { getMCQ , getOption} from "./questions/getMCQ.js";
import QuizBlock from "./settings/QuizBlock.svelte";
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
// import { page } from '$app/stores';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import ToolBar from './toolbar/ToolBar.svelte';
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

function unPublish(){
      // quiz.published = false;
        quizStore.update(currentQuiz => ({ ...currentQuiz, published: false }));
      // console.log("quiz.published",quiz.published);
}
onMount(async ()=>{

  try {
      // const token =  localStorage.getItem("token");    
      const quizId = new URLSearchParams(location.search).get("quizId");
             //----------------------------------

      const resp = await ajaxPost(`${BASE_URL}/quiz/find`,{quizId});
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
async function  addQuestion (){
  const question = getMCQ(uuidv4());
  quizStore.update(currentQuiz => {
    currentQuiz.questions.push(question);
    return currentQuiz;
  });
  unPublish();
  toast.push("New Question Added!");
}

/////////////////////////////////////

/////////////////////////////////////////

const save = async ()=>{
    isLoading = true; 
    //--Very important else the quiz.questions and the questions will be out of sync;
 //     quiz.questions = questions;
    // debugger;
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
<ToolBar  {save}  {toggleShowSettings}
{showSettings} />
{/if}



<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">




{#if !quiz}
<Loading  />
{/if}

{#if quiz}
<br>
<br>


{#if isLoading == true}
<div class= "animate-spin w-8 h-8 border-white rounded-full border-b-8 mx-auto ">
</div>
{/if}

<br>

      {#if showSettings}
      <QuizBlock  />
      {/if}
{/if}







<br>
<Questions/>


<br>
{#if quiz}

<button class="flex items-center bg-green-700 rounded-sm m-2 p-2 border-green-300 border-2 hover:bg-green-600 active:bg-green-800"
   on:click={addQuestion} 
>
  <span class="text-white mr-2">Add New Question</span>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 2v20m10-10H2" stroke="white" stroke-width="3" fill="none"/>
  </svg>
</button>
<br>

{/if}



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