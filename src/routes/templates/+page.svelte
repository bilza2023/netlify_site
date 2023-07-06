<script>
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import Cards from "./templ/Cards.svelte";
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import { BASE_URL } from '$lib/js/config.js';
import ajaxPost from "$lib/js/ajaxPost.js";
import { toast } from '@zerodevx/svelte-toast';
// import getRunning from "./getRunning";
import NewTempl from './NewTempl.svelte';

//-----------------------------------------------
import { templatesStore,testsStore,runsStore,studentsStore ,classStore,appStateStore} from '../mainStore.js';

$: templates = $templatesStore; 
$: tests = $testsStore; 
$: runs = $runsStore; 
$: students = $studentsStore; 
$: classObj = $classStore; 
$: appState = $appStateStore; 


//-----------------------------------------------

import {showNewTemplStore} from "./dashboardStore";
$: showNewTempl = $showNewTemplStore;


let tests = null;

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
                    // populate();
          }
    } catch (error) {
      // console.error(error);
    }
// console.log("isLogin" , isLogin);    
});

   //some things




const populate = async () =>{
 try {
    const resp = await ajaxPost(`${BASE_URL}/template/read`,{data:{}});
    // debugger;
                const data = await resp.json();
                if (resp.ok == true) {
                   const incommingTemplates =  data.items;
                  templatesStore.set(incommingTemplates);
                }else {
                      toast.push(data.message);
                }  

 } catch (error) {
    // console.error(error);
    toast.push(error.message);
    // toast.push("failed to load..");
 }
}
</script>
<div class="bg-gray-800"><!--page div-->
<Nav />


<HdgWithIcon title="Templates" , icon ="📜"/>
{#if isLogin}
            {#if showNewTempl}
            <NewTempl />
            {/if}

<div class="bg-gray-800 w-full">            
<Cards quizzes={templates} urlTag={"editTemplate"} />
</div>          
{/if}

<Footer />
</div>