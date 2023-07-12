<script>

// import FormIntro from "./formIntro/FormIntro.svelte";
// import QuizComp from "./quizComp/QuizComp.svelte";
// import Outro from "./outro/Outro.svelte";
 
// import { BASE_URL } from '$lib/js/config.js';
import Loading from '$lib/cmp/Loading.svelte';
import Agent from '../../lib/communicator/Agent';
import { onMount } from 'svelte';

let survey;
let pageState = 'loading';
let notFoundMsg = "Not Found";

onMount(async () => {
  try {
  debugger;
  let  quizId = new URLSearchParams(location.search).get("quizId"); 
  const resp = await Agent.readone('run', {id :quizId});

    if (resp.ok) {
        const data = await resp.json();
        survey = data.item; 
    } else {
      const data = await resp.json();
      toast.push('failed to load');
    }
  
  } catch (error) {
    console.error(error);
  }
}); 

</script>


<div class="wrapper w-full p-2 bg-gray-800 min-h-screen text-white ">

<h1>This is 100%</h1>
{#if survey}
<h1>{survey.title}</h1>
{/if}
</div>

