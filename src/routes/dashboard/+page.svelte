<script>
// import AreYouSure from "$lib/cmp/AreYouSure.svelte";

import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
// import H1 from '$lib/cmp/H1.svelte';
import Table from "./Table.svelte";
import ToolBar from "./toolbar/ToolBar.svelte";
import Cards from "./Cards.svelte";
import { BASE_URL } from '$lib/js/config.js';
import ajaxGet from "$lib/js/ajaxGet.js";
import { toast } from '@zerodevx/svelte-toast';

$: quizzes = [];
// let showTable = false;
let tests = null;
let templates = null;
let running = null;

let showTemplates = true;
let showTests = false;
let showRunning = false;

const tooglePanel = (tag) => {
  switch (tag) {
    case "templates":
      showTemplates = true;
      showTests = false;
      showRunning = false;
      break;
    case "tests":
      showTests = true;
      showTemplates = false;
      showRunning = false;
      break;
    case "running":
      showRunning = true;
      showTests = false;
      showTemplates = false;
      break;
  
    default:
      break;
  }

}

import { onMount } from 'svelte';
let isLogin=false;
onMount(async ()=>{

  try {
      const token = await localStorage.getItem("token");
      // debugger;
          if (token == null || token.length == 0) {
              isLogin = false;
          }else {
              isLogin = true;
                    populate();
          }
    } catch (error) {
      // console.error(error);
    }
// console.log("isLogin" , isLogin);    
});

 
const populate = async () =>{
 try {
 //  debugger;

  const resp = await ajaxGet( `${BASE_URL}/survey/pagetemplate/10/0`);
  if(resp.ok){
    const data = await resp.json();
    // console.log(data);
    templates = data.surveys; 
    populate2();
  }else {
    toast.push("failed to load Templates");
  }
   // console.log("quizzes",quizzes);

 } catch (error) {
    // console.error(error);
    toast.push("failed to load..");
 }
}

const populate2 = async () =>{
 try {
 //  debugger;

  const resp = await ajaxGet( `${BASE_URL}/survey/pagetest/10/0`);
  if(resp.ok){
    const data = await resp.json();
    // console.log(data);
    tests = data.surveys; 
    populate3();
  }else {
    toast.push("failed to load Tests");
  }
   // console.log("quizzes",quizzes);

 } catch (error) {
    // console.error(error);
    toast.push("failed to load..");
 }
}
const populate3 = async () =>{
 try {
 //  debugger;

  const resp = await ajaxGet( `${BASE_URL}/survey/page/10/0`);
  if(resp.ok){
    const data = await resp.json();
    // console.log(data);
    running = data.surveys; 
 
  }else {
    toast.push("failed to load Tests");
  }
   // console.log("quizzes",quizzes);

 } catch (error) {
    // console.error(error);
    toast.push("failed to load..");
 }
}

</script>
<div class="bg-gray-800"><!--page div-->
<Nav />

<!-- <ToolBar  {toggleShowTable} {showTable}/> -->

<!--page div-->

{#if isLogin == false}
<div class="bg-gray-800 text-white m-0 py-0 px-6 min-h-screen flex justify-center  " >
<div class="w-11/12">
<h1><a href="/login">Please login</a></h1>
</div>
</div>

{:else}

<div class="flex justify-center">

<button class=" text-center p-2 m-1 rounded-md text-white text-1xl 
bg-blue-700 my-4" on:click={() => tooglePanel("templates")}
>Templates</button>
<button class=" text-center p-2 m-1 rounded-md text-white text-1xl 
bg-red-700 my-4" on:click={() => tooglePanel("tests")}
>Tests</button>
<button class=" text-center p-2 m-1 rounded-md text-white text-1xl 
bg-green-700 my-4" on:click={() => tooglePanel("running")}
>Running</button>


</div>

<div class="bg-gray-800 w-full">
            
            {#if showTemplates == true}
              <Cards quizzes={templates} urlTag={"edit"} />
            {/if}

            {#if showTests == true}
              <Cards quizzes={tests} urlTag={"test"} />
            {/if}
            {#if showRunning == true}
              <Cards quizzes={running} urlTag={"show"} />
            {/if}

</div>          
{/if}


<Footer />
</div>