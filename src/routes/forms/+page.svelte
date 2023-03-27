<script>
import {is_login} from "$lib/stores/appStore.js";
import AreYouSure from "$lib/cmp/AreYouSure.svelte";
import { toast } from '@zerodevx/svelte-toast';
let isLogin =false;
is_login.subscribe( (p)=> isLogin=p);

import { onMount } from 'svelte';
import NewQuizComp  from "./NewQuizComp.svelte";
import { BASE_URL } from '$lib/js/config.js';

$: quizzes = [];

const deleteQuiz = async (index)=>{
// debugger;
const token = localStorage.getItem('token');
const q = quizzes[index];
const response = await fetch( `${BASE_URL}/quiz/del` , {
// const response = await fetch('http://localhost/user/login', {
    method: 'POST',
    body: JSON.stringify( {id : q._id,token} ),
    headers: {
      'Content-Type': 'application/json'
    }
});
      const data = await response.json();
      if (data.status == "ok"){
        toast.push('deleted'); 
        populate();
      }else {
        toast.push( data.msg );
      }
}//del fn
onMount(async () => {
  if (isLogin == true){
      populate();
  }
}); 
const populate = async () =>{
try {
const token = localStorage.getItem('token');

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
  // console.log("quizzes",quizzes);

} catch (error) {
    console.error(error);
}
}
</script>
{#if isLogin == false}
<h1><a href="/login">Please login</a></h1>
{/if}


{#if isLogin == true}

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
          <th class="py-2 px-4 border">Show</th>
          <th class="py-2 px-4 border">Edit</th>
          <th class="py-2 px-4 border">Delete</th>
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

<td class="py-2 px-4 border bg-green-900 text-center text-white hover:bg-green-700 active:bg-green-800 rounded-md transition duration-200">
  <a href={`/quiz/edit?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    edit
  </a>
</td>

<td class="py-2 px-4 border bg-gray-900 text-center text-white hover:bg-gray-700 active:bg-gray-800 rounded-md transition duration-200">
  
  <AreYouSure deleteFn={deleteQuiz} {index}/>
</td>
            
         
          
          
          
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

{/if} 