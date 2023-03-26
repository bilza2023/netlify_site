<script>
import {is_login} from "$lib/stores/appStore.js";
let isLogin =false;
is_login.subscribe( (p)=> isLogin=p);

import { onMount } from 'svelte';
import NewQuizComp  from "./NewQuizComp.svelte";
import { BASE_URL } from '$lib/js/config.js';

$: quizzes = [];


onMount(async () => {
  if (isLogin == true){
      populate();
  }
}); 
const populate = async () =>{
try {
const token = localStorage.getItem('token');
//http://localhost:5173/quiz/show?quizId=6411609828a369b541fcd7d7
//   quizId = new URLSearchParams(location.search).get("quizId");
  // const url = `https://skillzaa.cyclic.app/quiz/page/10/0`;
// debugger;
  const resp = await fetch( `${BASE_URL}/quiz/page/10/0` ,{
  method: 'GET',
  headers: {
    // 'Authorization': `Bearer ${token}`,
    'Authorization': `${token}`
  }
  });

  const data = await resp.json();
//   console.log(data);
  quizzes = data.quizzes; 
  console.log("quizzes",quizzes);

} catch (error) {
    console.error(error);
}
}
</script>
{#if isLogin == false}
<h1><a href="/login">Please login</a></h1>
{/if}


{#if isLogin == true}
<!-- <div class=" border-2 border-white p-2 m-2  text-center ">
<h1 class="m-1 text-slate-200 text-3xl ">New Quiz</h1>
<input class="bg-gray-700 text-white  w-10/12 m-1"  type="text" bind:value={newPRojectName} >
<button class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={newQuiz}>Create</button> 
</div>-->
<NewQuizComp callback={populate} />
<br>
<h1 class="m-1 text-slate-200 text-2xl mt-2 underline text-center">Quizzes</h1>
<div class="p-4 m-4">
  {#if quizzes}
    <table class="w-full border-collapse border-white">
      <thead class="">
        <tr class="bg-gray-900 text-white">
          <th class="py-2 px-4 border">Ser</th>
          <th class="py-2 px-4 border">Title</th>
          <th class="py-2 px-4 border">Edit</th>
          <th class="py-2 px-4 border">Show</th>
        </tr>
      </thead>
      <tbody>
        {#each quizzes as quiz,index }
          <tr class="text-white bg-gray-900">
            <td class="py-2 px-4 border">{index+1}</td>
            <td class="py-2 px-4 border">{quiz.title}</td>


<td class="py-2 px-4 border bg-blue-900 text-center text-white hover:bg-blue-700 active:bg-blue-800 rounded-md transition duration-200">
  <a href= {`/quiz/show?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    show
  </a>
</td>

<td class="py-2 px-4 border bg-red-900 text-center text-white hover:bg-red-700 active:bg-red-800 rounded-md transition duration-200">
  <a href={`/quiz/edit?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    edit
  </a>
</td>
            
         
          
          
          
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

{/if} 