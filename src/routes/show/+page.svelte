<script>
import Outro from "./outro/Outro.svelte";
import QuizComp from "./quizComp/QuizComp.svelte";
import FormIntro from "./formIntro/FormIntro.svelte";
import { BASE_URL } from '$lib/js/config.js';
import Loading from '$lib/cmp/Loading.svelte';
import { onMount } from 'svelte';
import { quizStore , membersStore } from './store';
// import ajaxPost from '$lib/js/ajaxPost.js';
    // import { toast } from "@zerodevx/svelte-toast";

let quiz;
quizStore.subscribe(value => quiz = value);

let pageState = "loading";
let notFoundMsg = "Not Found";
////////////////////////////////////////////
////////////////////////////////////////////

const setPageState = (state) => pageState = state;

onMount(async () => {
  try {
  // const token = await localStorage.getItem("token");
 let  quizId = new URLSearchParams(location.search).get("quizId"); 
  const url = `${BASE_URL}/show/${quizId}`;
  const resp = await fetch(url);
  // console.log(data);
  // debugger;
    if (resp.ok) {
    const data = await resp.json();
      // quiz = data.quiz; 

    quizStore.update(() => ({ ...data.quiz }));
    membersStore.update(() => ({ ...data.members }));

      pageState = "loaded"; //change it to setPageState()
      // console.log("notfound");
    } else {
    const data = await resp.json();
      pageState = "notfound";  
      // toast.push(data.msg);
      notFoundMsg = data.msg;
      // console.log("loaded");
    }
     
    // }else {
    // }
} catch (error) {
    // console.error(error);
    pageState = "notfound";
}
}); 

</script>


<div class="wrapper w-full p-2 bg-gray-800 min-h-screen ">

{#if pageState == "notfound"}

  <p class="p-4 mx-auto mt-12 w-6/12 bg-gray-500 border-2 border-gray-200  text-white text-center text-3xl">
  {`${notFoundMsg}`}</p>
{/if}
 
{#if pageState == "loading"}
<Loading   title="Loading..."  />
{/if}

<!--Intro-->
{#if pageState == "loaded" }
{#if quiz.showIntro == true || quiz.quizType == "quiz"}

 <FormIntro  {setPageState} />

{:else}
{pageState = "showQuiz"}     
{/if}
{/if}
  

{#if pageState == "showQuiz" }
<QuizComp {quiz} {setPageState}  />
{/if}



{#if pageState == "outro" }
<Outro  {quiz} />
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