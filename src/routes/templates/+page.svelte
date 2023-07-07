
<script>
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import Cards from "./templ/Cards.svelte";
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';

import { toast } from '@zerodevx/svelte-toast';
import NewTempl from './NewTempl.svelte';
import Loading from '../../lib/cmp/Loading.svelte';

import { templatesStore , appLoadedStore} from '../mainStore.js';
//-----------------------------------------------
$: templates = $templatesStore; //===================== 
$: appLoaded = $appLoadedStore; //===================== 
//-----------------------------------------------

import {showNewTemplStore} from "./dashboardStore";
$: showNewTempl = $showNewTemplStore;



</script>
<div class="bg-gray-800 w-full h-full"><!--page div-->
<Nav />


<HdgWithIcon title="Templates" , icon ="📜"/>
{#if appLoaded }
  
            {#if showNewTempl}
            <NewTempl />
            {/if}

  <Cards quizzes={templates}  urlTag={"editTemplate"} />
     
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