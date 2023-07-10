<script>

import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import Cards from "./templ/Cards.svelte";
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import { loadApp } from "$lib/communicator/communicator";

import { toast } from '@zerodevx/svelte-toast';
import NewTempl from './NewTempl.svelte';
import Loading from '../../lib/cmp/Loading.svelte';
import { onMount } from 'svelte';
import { templatesStore , appLoadedStore} from '../appStore.js';
//-----------------------------------------------
$: templates = $templatesStore; //===================== 
$: appLoaded = $appLoadedStore; //===================== 
//-----------------------------------------------

// await loadApp();

import {showNewTemplStore} from "./dashboardStore";
$: showNewTempl = $showNewTemplStore;

onMount(async ()=>{
  try {
        // debugger;
         await loadApp();
  } catch (err){
  toast.push('Failed to load app');
  }
  });         

</script>
<div class="bg-gray-800 w-full h-full"><!--page div-->
<Nav />


<HdgWithIcon title="Templates" , icon ="📜"/>
{#if appLoaded }
  
            {#if showNewTempl}
            <NewTempl />
            {/if}

  <Cards quizzes={templates}  urlTag={"edit"} />
     
{:else}
  <Loading />
{/if}


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<Footer />
</div>