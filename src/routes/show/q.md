The following is the script portion of my svelte page component

<script>
import { onMount } from 'svelte';
import Intro from "./Intro.svelte";
import Outro from "./Outro.svelte";
import QuizComp from "./QuizComp.svelte";
import { BASE_URL } from '$lib/js/config.js';

let quiz;
let quizId;
let pageState = "loading";
const setPageState = (st)=>{ pageState= st;}
//...
onMount(async () => {
// try {
  quizId = new URLSearchParams(location.search).get("quizId"); 
  const url = `${BASE_URL}/quiz/show/${quizId}`;
  const resp = await fetch(url);
  const data = await resp.json();
  // const status = data.status;
  console.log(data);
  console.log(data.success);
  const s = data.success;
  debugger;
    if ( s  ==  "notfound" ){

        pageState = "notfound";
    
    }else {
      quiz = data.quiz; 
      pageState = "loaded"; //change it to setPageState()
    }
// } catch (error) {
//     console.error(error);
// }
}); 

</script>


The if statement 
  if ( s  ==  "notfound" ){
does not get executed even when the s == "notfound" (i have made sure in every possible way). WHY DOES THE IF statement does not get executed even when the s == "notfound".

Compelte code is ==>
<script>
import { onMount } from 'svelte';
import Intro from "./Intro.svelte";
import Outro from "./Outro.svelte";
import QuizComp from "./QuizComp.svelte";
import { BASE_URL } from '$lib/js/config.js';

let quiz;
let quizId;
let pageState = "loading";
const setPageState = (st)=>{ pageState= st;}
//...
onMount(async () => {
// try {
  quizId = new URLSearchParams(location.search).get("quizId"); 
  const url = `${BASE_URL}/quiz/show/${quizId}`;
  const resp = await fetch(url);
  const data = await resp.json();
  // const status = data.status;
  console.log(data);
  console.log(data.success);
  const s = data.success;
  debugger;
    if ( s  ==  "notfound" ){

        pageState = "notfound";
    
    }else {
      quiz = data.quiz; 
      pageState = "loaded"; //change it to setPageState()
    }
// } catch (error) {
//     console.error(error);
// }
}); 

</script>

{#if pageState == "error"}
  <p class="p-4 m-4 w-full bg-gray-500 border-2 border-gray-200 text-2xl">Not Found...</p>
{/if}

{#if pageState == "loading"}
  <p class="p-4 m-4 w-full bg-gray-500 border-2 border-gray-200 text-2xl">Loading...</p>
{:else}


<!-- Quiz Title Always Except When Loading-->
{#if pageState !== "loading" && pageState !== "loaded"}
<div class="flex justify-center">
  <h1 class="bg-blue-900  p-2 m-1  mt-0  w-full text-center text-2xl rounded-md">{quiz.title}
  </h1>
</div>
  <br>
{/if}

<!--Intro-->
{#if pageState == "loaded"}
  {#if quiz.showIntro == true}
  <Intro
    title= {quiz.title}
    description= {quiz.introText}
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



{/if}


<br>
<br>
<br>