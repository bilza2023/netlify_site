<script>
import { onMount } from 'svelte';
import { page } from '$app/stores';
import { BASE_URL } from '$lib/js/config.js';
import Nav from '$lib/nav/Nav.svelte';
import Loading from '$lib/cmp/Loading.svelte';
import TableQuiz from './TableQuiz.svelte';
import TableSurvey from './TableSurvey.svelte';
import Summary from './Summary.svelte';
import ajaxPost from "$lib/js/ajaxPost.js";
import { toast } from '@zerodevx/svelte-toast';
let pageState = "loading";
let results= null;
export let quiz;
let isLogin=false; 
onMount(async () => {
  try {
     getResults();
  } catch (error) {
    // console.error(error);
    toast.push("page load error");
 }
});

const getResults = (async () => {
 try {
  const token = localStorage.getItem("token");
  const  quizId = new URLSearchParams(location.search).get("quizId");
  const response = await ajaxPost(`${BASE_URL}/result/analytics`,{ quizId ,token });
  
          if (response.ok){
            const data = await response.json();
            results = data.results;
            quiz = data.quiz;
            console.log("qioz data..",data);
            pageState = "loaded";
          }else {
            toast.push("failed to load results");
          }
  
  } catch (error) {
    toast.push("unknown error in loading results");
 }
}); 


async function deleteARez(resultId){
  try {
  // console.log("rezId", rezId);
  // console.log("token", token);

  const token =  localStorage.getItem("token");
     
          //----------------------------------
        const resp = await ajaxPost(`${BASE_URL}/result/del`,
        {token ,resultId} );
        // debugger;
        if (resp.ok == true) {
          // const data = await resp.json();
              toast.push("Deleted");
              getResults();

        }else{
              // const data = await resp.json();
              toast.push("Failed to delete");
        }

 } catch (error) {
      toast.push("Failed to delete"); 
 }
}
</script>

<Nav/>

<div class="bg-gray-800 text-white w-full min-h-screen p-6 ">


{#if pageState == "loading" }
<div class="flex justify-center w-full">
<Loading  />
</div>
{/if}




{#if pageState == "loaded" }


<h1 class="rounded-lg p-2  bg-blue-900 text-center text-white text-2xl underline mb-4">Responses: {quiz.title}</h1>


<Summary {results}/>

          {#if results.length > 0  }
              <div class="flex justify-center">
                {#if quiz.quizType == "survey"}
                <TableSurvey  {results} {deleteARez}/>
                {:else}
                <TableQuiz  {results} {deleteARez}/>
                {/if}
              </div>

          {:else} 
          <div class="flex justify-center w-full">
          <h1 class="rounded-lg p-2  bg-red-900 text-center text-white text-2xl underline mb-4 w-6/12">No Results Yet...</h1>
          </div>
          {/if}    


{/if}


</div>



