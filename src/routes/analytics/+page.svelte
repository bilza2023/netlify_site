<script>
import { onMount } from 'svelte';
import { page } from '$app/stores';
import { BASE_URL } from '$lib/js/config.js';
import Nav from '$lib/nav/Nav.svelte';

let results=[];
let isLogin=false; 
onMount(async () => {
  try {
  const token = await localStorage.getItem("token");
      // debugger;
  if (token == null || token.length == 0) {
              isLogin = false;
  }else {
          isLogin = true;
          const  quizId = new URLSearchParams(location.search).get("quizId");
          const response = await fetch(`${BASE_URL}/result/analytics`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ quizId })
          });
          const data = await response.json();
          results = data.results;
            // console.log("results", results);
  }
  } catch (error) {
    console.error(error);
 }
}); 

</script>

<Nav isLogin={isLogin}/>

<div class="bg-gray-800 text-white w-full min-h-screen p-6 ">



<div class="">
<h1 class="rounded-lg p-2  bg-blue-900 text-center text-white text-2xl underline mb-4">Responses</h1>
</div>

<br/>

<div class="flex justify-center">
<table class="w-10/12 ">
<tr class="text-center text-white bg-blue-900">
<td class="tbltd">ser</td>
<td class="tbltd">IP</td>
<td class="tbltd">email</td>
<td class="tbltd">Correct Answers</td>
<td class="tbltd">Wrong Answers</td>
<td class="tbltd">Skipped Answers</td>
<td class="tbltd">Marks</td>
</tr>

{#each results as result , index}
<tr class="text-center">
<td class="tbltd">{index+1}</td>
<td class="tbltd">{result.ip}</td>
<td class="tbltd">{result.email}</td>
<td class="tbltd">{result.correctAnswers.length}</td>
<td class="tbltd">{result.wrongAnswers.length}</td>
<td class="tbltd">{result.skippedAnswers.length}</td>
<td class="tbltd">{result.correctAnswers.length}</td>
</tr>
{/each}

</table>
</div>


</div>


<style>
.tbltd {
border:1px solid silver;
padding:1px;
color:white;

}
</style>