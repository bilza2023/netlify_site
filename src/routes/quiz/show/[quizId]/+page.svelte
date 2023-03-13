<script>
let pageStateVar = 0;
import {pageState} from "./showQuizStore";
pageState.subscribe( (p)=> pageStateVar=p);


import {QuizJson} from "./quizJson.js"
import { onMount } from 'svelte';
import { page } from '$app/stores';
import Intro from "./Intro.svelte";
import Outro from "./Outro.svelte";
import QuizComp from "./QuizComp.svelte";
import saveResponse from "./saveResponse.js";


let currentQuestionIndex = 0;
let quiz;
let questions =[];
let quizId;

  function showQuestionCard(index) {
    const questionCards = document.querySelectorAll(".questionCard");
    questionCards.forEach((card) => {
      card.style.display = "none";
    });
    questionCards[index].style.display = "block";
  }

  function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestionCard(currentQuestionIndex);
    }
  }

  function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestionCard(currentQuestionIndex);
    }
  }

onMount(async () => {
 try {
 console.log("QuizJson", QuizJson);
quiz = QuizJson;
questions = QuizJson.questions;

 } catch (error) {
    console.error(error);
  }
}); 

</script>

<!-- Quiz Title -->
{#if pageStateVar !=0}
<div class="flex justify-center">
<h1 class="bg-blue-700 rounded-md p-2 m-2 w-full text-center">{QuizJson.title}</h1></div>
{/if}

{#if pageStateVar==0}
  {#if QuizJson.showIntro == true}
  <Intro
    title= {QuizJson.title}
    description= {QuizJson.description}
    callToAction="Sign up now!"
  />
  {:else}
  {pageState.set(1)}
  {/if}
{/if}



{#if pageStateVar==1}
<QuizComp {questions} />  
{/if}


{#if pageStateVar==2}
<Outro />
{/if}