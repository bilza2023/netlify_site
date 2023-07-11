<script>
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';  
import QuizBlock from "./QuizBlock.svelte"; 
import Teams from "./settings/Teams.svelte";
import QuestionsROM from "./QuestionsROM.svelte";
import PulishTiming from "./PulishTiming.svelte";
import UnPulishTiming from "./UnPulishTiming.svelte";
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import { toast } from '@zerodevx/svelte-toast';
import ToolBar from './toolbar/ToolBar.svelte';
import { onMount } from 'svelte';
import Loading from '$lib/cmp/Loading.svelte';
import loadApp from "../../lib/communicator/loadApp";

import { testsStore } from '../appStore.js';

let test;
//========
onMount(async ()=>{
  try {
         await loadApp();
       
      const quizId = new URLSearchParams(location.search).get("quizId");
      test  = await $testsStore.find(item => item._id === quizId);
    // debugger; 

    } catch (error) {
      // console.error(error);
    }
});
/////////////////////////////////////////


</script>

<Nav/>


<ToolBar  {test}/>


<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">

 <HdgWithIcon title="Edit Test" , icon ="🧪"/>
<br/>

{#if !test}
<Loading />
{/if}


{#if test}
<QuizBlock quiz={test}  />

<br>
<Teams />
<br>
<PulishTiming  quiz={test} />
<br>
<UnPulishTiming  quiz={test} />
<br>
<QuestionsROM  quiz={test}/>
<br>
{/if}


<br>
<br> 
<br>
<br> 
<br>
<br> 
<br>
<br> 
<br>
<br> 
</div><!--app-->


<Footer />


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