<script>
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import Cards from "./templ/Cards.svelte";
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import { BASE_URL } from '$lib/js/config.js';
import ajaxGet from "$lib/js/ajaxGet.js";
import { toast } from '@zerodevx/svelte-toast';
import getRunning from "./getRunning";
import NewTempl from './NewTempl.svelte';

import {templatesStore,showNewTemplStore} from "./dashboardStore";
$: templates = $templatesStore;
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
    templatesStore.set(data.surveys); 
  }else {
    toast.push("failed to load Templates");
  }
 } catch (error) {
    // console.error(error);
    toast.push("failed to load..");
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
<Cards quizzes={templates} urlTag={"edit"} />
</div>          
{/if}

<Footer />
</div>