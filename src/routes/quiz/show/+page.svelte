<script>
import {pageState} from "./showQuizStore";
//--------
import { onMount } from 'svelte';
// import { page } from '$app/stores';
import Intro from "./Intro.svelte";
import Outro from "./Outro.svelte";
import QuizComp from "./QuizComp.svelte";

let quiz;
let quizId;

onMount(async () => {
try {
//http://localhost:5173/quiz/show?quizId=6411609828a369b541fcd7d7
  quizId = new URLSearchParams(location.search).get("quizId");
  const url = `https://skillzaa.cyclic.app/quiz/${quizId}`;
  // quizId = "6411609828a369b541fcd7d7";
  // const url = `https://skillzaa.cyclic.app/quiz/6411609828a369b541fcd7d7`;
  // console.log(url);
  const resp = await fetch(url);
  const data = await resp.json();
  quiz = data.quiz;
  // console.log(data);

  // quiz = QuizJson;
  // console.log(quiz._id);
} catch (error) {
    console.error(error);
}
}); 
//--------
let isLoading = true;
$: pageStateVar = 0;
pageState.subscribe((p) => pageStateVar = p);
$: isLoading = !quiz && pageStateVar !== 0;

</script>


{#if !quiz}
  <p>Loading quiz...</p>
{:else}


<!-- Quiz Title -->
{#if pageStateVar !=0}
<div class="flex justify-center">
  <h1 class="bg-blue-900  p-2 m-1  mt-0  w-full text-center text-2xl">         {quiz.title}
  </h1>
</div>
{/if}

<!--Intro-->
{#if pageStateVar==0}
  {#if quiz.showIntro == true}
  <Intro
    title= {quiz.title}
    description= {quiz.introText}
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



{/if}