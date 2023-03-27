<script>
// import {pageState} from "./showQuizStore";
//--------
import { onMount } from 'svelte';
// import { page } from '$app/stores';
import Intro from "./Intro.svelte";
import Outro from "./Outro.svelte";
import QuizComp from "./QuizComp.svelte";
import { BASE_URL } from '$lib/js/config.js';

let quiz;
let quizId;
let pageState = "loading";

const setPageState = (st)=>{ pageState= st;}

onMount(async () => {
try {

  quizId = new URLSearchParams(location.search).get("quizId"); 
  const url = `${BASE_URL}/quiz/show/${quizId}`;
  const resp = await fetch(url);
  const data = await resp.json();
  quiz = data.quiz;
  
pageState = "loaded"; //change it to setPageState()

} catch (error) {
    console.error(error);
}
}); 
//--------
// let isLoading = true;
// $: pageStateVar = 0;
// pageState.subscribe((p) => pageStateVar = p);
// $: isLoading = !quiz && pageStateVar !== 0;

</script>


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