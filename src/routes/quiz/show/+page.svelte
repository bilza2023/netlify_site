<script>
export const prerender = false;
import {pageState} from "./showQuizStore";
//--------
let pageStateVar = 0;
pageState.subscribe( (p)=> pageStateVar=p);
//--------
import {QuizJson} from "./quizJson.js"
import { onMount } from 'svelte';
// import { page } from '$app/stores';
import Intro from "./Intro.svelte";
import Outro from "./Outro.svelte";
import QuizComp from "./QuizComp.svelte";

let quiz;
let quizId;

onMount(async () => {
try {
  quizId = new URLSearchParams(location.search).get("quizId");
  const url = `http://localhost/quiz/${quizId}`;
  console.log(url);
  const resp = await fetch(url);
  const data = await resp.json();

  // quiz = QuizJson;
  quiz = data.quiz;
  console.log(quiz._id);
} catch (error) {
    console.error(error);
}
}); 

</script>

<!-- Quiz Title -->
{#if pageStateVar !=0}
<div class="flex justify-center">
  <h1 class="bg-blue-900  p-3 m-4  mt-0  w-full text-center text-2xl">         {QuizJson.title}
  </h1>
</div>
{/if}

<!--Intro-->
{#if pageStateVar==0}
  {#if QuizJson.showIntro == true}
  <Intro
    title= {QuizJson.title}
    description= {QuizJson.introText}
    callToAction="Sign up now!"
  />
  {:else}
  {pageState.set(1)}
  {/if}
{/if}


<!--Quiz-->
{#if pageStateVar==1}
<QuizComp {quiz} />  
{/if}

<!--Outro-->
{#if pageStateVar==2}
<Outro {quiz}/>
{/if}