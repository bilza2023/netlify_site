<script>
// import MainFlex from "$lib/cmp/MainFlex.svelte";
import Underconstruction from "$lib/cmp/Underconstruction.svelte";
import  generateRandomGradient  from "$lib/js/gradiant_dark.js";
// import DivCard from "$lib/cmp/DivCard.svelte";
// import {mainQuizList} from "./main_quiz_list.js";
import { BASE_URL } from '$lib/js/config.js';
import { onMount } from 'svelte';
// console.log("QuizList" , mainQuizList);
let quizzes;
const skrink = (txt)=>{
  if (txt.length <= 25) {
    return txt;
  } else {
    return txt.slice(0, 22) + "...";
  }    
}

onMount(async () => {
 const resp = await fetch( `${BASE_URL}/quiz/featured`);
const q  = await resp.json();
quizzes = q.quizzes;
// debugger;
}); 
</script>

<!-- <h1>{isLogin}</h1> -->

<!-- <h1><a href="/quiz/create">New Quiz</a></h1> -->
<!-- <h1><a href="/quiz">Quizzes</h1> -->
<!-- <button on:click={add}>Add</button> -->
<Underconstruction  />
<img src="./images/heroBanner.png" alt="">
<br>
<br>
{#if quizzes}

<div class="flex flex-wrap  justify-center gap-2">

{#each quizzes as item}
  <a href={`/quiz/show?quizId=${item._id}`} 
  class="flex-shrink-0   w-full md:w-1/2 lg:w-1/5  ">
    <div class=" rounded-lg cursor-pointer border-2 border-white text-center">
      
      <div style={`min-height:100px; background-image: ${generateRandomGradient()}`} class="flex items-center rounded-md justify-center">
  <p class=" overflow-hidden overflow-ellipsis">{skrink(item.title)}</p>
</div>

    </div>
  </a>

{/each}

</div>

{/if}

