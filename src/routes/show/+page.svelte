<script>
import FormIntro from "./formIntro/FormIntro.svelte";
import QuizComp from "./quizComp/QuizComp.svelte";
import Outro from "./outro/Outro.svelte";

import { BASE_URL } from '$lib/js/config.js';
import Loading from '$lib/cmp/Loading.svelte';
import { onMount } from 'svelte';
//membersStore is quiz members ; the name is confusing
import { quizStore , pageStateStore, membersStore } from './store';

$: quiz = $quizStore;
$: pageState = $pageStateStore;


let notFoundMsg = "Not Found";

onMount(async () => {
  try {
    pageStateStore.set('loading');
  // const token = await localStorage.getItem("token");
 let  quizId = new URLSearchParams(location.search).get("quizId"); 
  const url = `${BASE_URL}/show/${quizId}`;
  const resp = await fetch(url);
  // console.log(data);
  // debugger; 
    if (resp.ok) {
    const data = await resp.json();
    //--remove me
    // console.log("quiz at load",data);

    quizStore.update(() => ({ ...data.quiz }));
    membersStore.update(() => ({ ...data.members }));

      pageStateStore.set("loaded");
      // console.log("notfound");
    } else {
    const data = await resp.json();
      pageStateStore.set("notfound");
      // toast.push(data.msg);
      notFoundMsg = data.msg;
      // console.log("loaded");
    }
     
    // }else {
    // }
  } catch (error) {
    // console.error(error);
    // p = "notfound";
    pageStateStore.set("notfound");
  }
}); 

</script>


<div class="wrapper w-full p-2 bg-gray-800 min-h-screen ">

{#if pageState == "loading"}
 <Loading   title="Loading..."  />
{/if}

{#if pageState == "notfound"}

  <p class="p-4 mx-auto mt-12 w-6/12 bg-gray-500 border-2 border-gray-200  text-white text-center text-3xl">
  {`${notFoundMsg}`}</p>
{/if}

<!--Intro pageStateStore == "loaded"-->
{#if  pageState == "loaded" }
 <FormIntro  />
{/if}
  

{#if pageState == "showQuiz" }
 <QuizComp   />
{/if}



{#if pageState == "outro" }
 <Outro />
{/if}



</div>


<style>
@media screen and (max-width: 358px) {
  .wrapper::before {
    content: "Please use a larger screen to view this web page";
    display: block;
    text-align: center;
    font-size: 24px;
    padding: 20px;
  }
}

</style>