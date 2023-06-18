<script>
import { BASE_URL } from '$lib/js/config.js';
import Nav from '$lib/nav/Nav.svelte';
import Loading from '$lib/cmp/Loading.svelte';
import Indl from './indl/Indl.svelte';
import ajaxPost from "$lib/js/ajaxPost.js";
import { toast } from '@zerodevx/svelte-toast';
import check from './check/check.js';

// import StudentResportsTable from "./individual/StudentResportsTable.svelte"; 
// import getStudentReports from "./individual/getStudentReports.js"; 

let pageState = "loading";
let results= null;
let quiz;
// let studentResports =[];

////////////////////////////////////
import { onMount } from 'svelte';
onMount(async () => {
  try {

  const  quizId = new URLSearchParams(location.search).get("quizId");
  const response = await ajaxPost(`${BASE_URL}/result/analytics`,{quizId});

          if (response.ok){
            const data = await response.json();
            results = data.results;
            quiz = data.quiz;
              // debugger;
              await check(results,quiz);

            // console.log("Results:" , results);
            // studentResports = []
            // studentResports = await getStudentReports(quiz,results);
            pageState = "loaded";
            return;
          }
  } catch (error) {
    // console.error(error);
    toast.push("page load error");
 }
});


</script>

<Nav/>

<div class="wrapper bg-gray-800 text-white w-full min-h-screen p-6 ">

{#if pageState == "loading" }
  <div class="flex justify-center w-full">
  <Loading  />
  </div>
{/if}


{#if pageState == "loaded" }
<Indl {quiz} {results}/>
{/if}

<!-- {#if pageState == "loaded" }
  <h1 class="rounded-lg p-2  bg-blue-900 text-center text-white text-2xl underline mb-4">Results: {quiz.title}</h1>
  <StudentResportsTable  {studentResports}/>
{/if} -->

</div>



<style>
@media screen and (max-width: 640px) {
  .wrapper::before {
    content: "Please use a larger screen to view this web page";
    display: block;
    text-align: center;
    font-size: 24px;
    padding: 20px;
  }
}

</style>

