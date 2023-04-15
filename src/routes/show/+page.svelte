<script>
import Outro from "./Outro.svelte";
import QuizComp from "./QuizComp.svelte";
import FormIntro from "./FormIntro.svelte";
import { BASE_URL } from '$lib/js/config.js';
import { onMount } from 'svelte';

let quiz;
let quizId;
let pageState = "loading";
//...

const setPageState = (state) => pageState = state;

onMount(async () => {
  try {
  // const token = await localStorage.getItem("token");
     
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
      pageState = "loaded"; //change it to setPageState()
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


<div class="w-full p-2 bg-gray-800 min-h-screen ">

{#if pageState == "notfound"}
  <p class="p-4 m-4 w-full bg-gray-500 border-2 border-gray-200 text-2xl">Not Found...</p>
{/if}

{#if pageState == "loading"}
  <p class="p-4 m-4 w-full bg-gray-500 border-2 border-gray-200 text-2xl">Loading...</p>
{/if}

<!--Intro-->
{#if pageState == "loaded" }
{#if quiz.showIntro == true || quiz.quizType == "quiz"}

 <FormIntro {quiz} {setPageState} />

{:else}
{pageState = "showQuiz"}     
{/if}
{/if}
  

{#if pageState == "showQuiz" }
<QuizComp {quiz} {setPageState}  />
{/if}



{#if pageState == "outro" }
<Outro  {quiz} />
{/if}



</div>