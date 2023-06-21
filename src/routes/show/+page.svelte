<script>
import FormIntro from "./formIntro/FormIntro.svelte";
import QuizComp from "./quizComp/QuizComp.svelte";
import Outro from "./outro/Outro.svelte";

import { BASE_URL } from '$lib/js/config.js';
import Loading from '$lib/cmp/Loading.svelte';
import { onMount } from 'svelte';
//membersStore is quiz members ; the name is confusing
import { quizStore , pageStateStore, membersStore } from './store';
// import isPublished from './fn/isPublished';

$: quiz = $quizStore;
$: pageState = $pageStateStore;


let notFoundMsg = "Not Found";

function formatDate(dateString) {
  var date = new Date(dateString);
  
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  var dayOfWeek = daysOfWeek[date.getDay()];
  var day = date.getDate();
  var month = months[date.getMonth()];
  var year = date.getFullYear();

  var formattedDate = `${dayOfWeek} ${day} ${month}, ${year}`;

  return formattedDate;
}

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
    
    } else {
    const data = await resp.json();
      pageStateStore.set("notfound");
      // debugger;
      if (data.pub.publishStatus == 'waiting'){
        notFoundMsg = `The Test is in Waiting. Will start at 
        ${formatDate(data.pub.publishTime)} with in ${data.pub.waitingTime.hours} hours and ${data.pub.waitingTime.minutes} minutes`;
      }else{
        notFoundMsg = data.msg;
      }
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