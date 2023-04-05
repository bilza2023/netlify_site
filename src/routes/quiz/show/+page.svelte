<script>
import { onMount } from 'svelte';
import Intro from "./Intro.svelte";
import Outro from "./Outro.svelte";
import QuizComp from "./QuizComp.svelte";
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';

let quiz;
let quizId;
let pageState = "loading";
const  setPageState = (currentState)=>{
  switch (currentState) {

      case "loaded":
        pageState = "loaded";
        break;
      case "notfound":
        pageState = "notfound";
        break;
      case "showQuiz":
        pageState = "showQuiz";
        break;
      case "outro":
        pageState = "outro";
        break;

      default:
        break;
  }

return "error";
}
//...
onMount(async () => {
try {
  quizId = new URLSearchParams(location.search).get("quizId"); 
  const url = `${BASE_URL}/quiz/show/${quizId}`;
  const resp = await fetch(url);
  const data = await resp.json();
  const x = data.code;
  // console.log(data);
  // debugger;
    if (x === 2) {
      pageState = "notfound";
      // console.log("notfound");
    } else {
      quiz = data.quiz; 
      setPageState("loaded"); //change it to setPageState()
      // console.log("loaded");
    }
     
    // }else {
    // }
} catch (error) {
    // console.error(error);
    pageState = "notfound";
}
}); 

</script>

{#if pageState == "notfound"}
  <p class="p-4 m-4 w-full bg-gray-500 border-2 border-gray-200 text-2xl">Not Found...</p>
{/if}

{#if pageState == "loading"}
  <p class="p-4 m-4 w-full bg-gray-500 border-2 border-gray-200 text-2xl">Loading...</p>
{:else}


<!-- Quiz Title Always Except When Loading-->
{#if pageState !== "loading" && pageState !== "loaded" && pageState !== "notfound"}
<div class="flex justify-center">
  <h1 class="bg-blue-900  p-2 m-1  mt-0  w-full text-center text-2xl rounded-md">{quiz.title}
  </h1>
</div>
  <br>
{/if}

<!--Intro-->
{#if pageState == "loaded"}
  {#if quiz.showIntro == true || quiz.dispatchTo == "selected" || quiz.dispatchTo == "team"}
  <Intro
    title= {quiz.title}
    {quiz}
    introText= {quiz.introText}
    {setPageState}
  />
  {:else}
  {pageState="showQuiz"}
  {/if}
{/if}


<!--Quiz-->
{#if pageState == "showQuiz"}
<QuizComp {quiz} {setPageState} />  
{/if}
 
<!--Outro-->
{#if pageState == "outro"}
<Outro {quiz}/>
{/if}

<br>
<br>
<br>


{/if}

