<script>
import { pageState } from "./showQuizStore";
import { onMount } from "svelte";
import Intro from "./Intro.svelte";
import Outro from "./Outro.svelte";
import QuizComp from "./QuizComp.svelte";

let quiz;
let quizId;
let isLoading = true;

onMount(async () => {
  try {
    quizId = new URLSearchParams(location.search).get("quizId");
    const url = `https://skillzaa.cyclic.app/quiz/${quizId}`;
    const resp = await fetch(url);
    const data = await resp.json();
    quiz = data.quiz;
    isLoading = false;
    pageState.set(1);
  } catch (error) {
    console.error(error);
  }
});

$:pageStateVar = 0;
pageState.subscribe((p) => ( pageStateVar = p));
</script>

{#if isLoading}
  <div>Loading...</div>
{:else}
  {#if pageStateVar === 0}
    {#if QuizJson.showIntro}
      <Intro
        title={QuizJson.title}
        description={QuizJson.introText}
        callToAction="Sign up now!"
      />
    {:else}
      {pageState.set(1)}
    {/if}
  {:else if $pageStateVar === 1}
    <QuizComp {quiz} />
  {:else}
    <Outro {quiz} />
  {/if}
{/if}
