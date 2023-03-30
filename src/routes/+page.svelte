<script>
// import MainFlex from "$lib/cmp/MainFlex.svelte";
import Hero from "$lib/containers/hero/Hero.svelte";
import Underconstruction from "$lib/cmp/Underconstruction.svelte";
import  generateRandomGradient  from "$lib/js/gradiant_dark.js";
// import DivCard from "$lib/cmp/DivCard.svelte";
// import {mainQuizList} from "./main_quiz_list.js";
import { BASE_URL } from '$lib/js/config.js';

const quizzes = [
{ _id : "64234b9db5d31dab8acf14bb" , title : "World Geography Facts"},
{ _id : "6424bc4cc51d2f76484c3ff7" , title : "World War II Facts"},
{ _id : "6424018be683525d966ea647" , title : "Our Solar System"},
{ _id : "6424018be683525d966ea649" , title : "Global Economy 101"}

];
//...
const skrink = (txt)=>{
  if (txt.length <= 25) {
    return txt;
  } else {
    return txt.slice(0, 22) + "...";
  }    
}
 
</script>


<!-- <Underconstruction  /> -->
<br>

<Hero />
<br>
<br>

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

  <!-- <p class="p-4 m-4 w-full bg-gray-500 border-2 border-gray-200 text-2xl text-center rounded-md">Loading...</p> -->

