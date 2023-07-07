<script>

import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import RunningCards from "./running/RunningCards.svelte";
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import { runsStore , appLoadedStore} from '../mainStore.js';

//---------------------------------------------|
$: runs = $runsStore;            //============| 
$: appLoaded = $appLoadedStore; //=============| 
//---------------------------------------------|
</script>
<div class="bg-gray-800"><!--page div-->
<Nav />

<HdgWithIcon title="Running" , icon ="🏃‍♂️"/>
{#if appLoaded}

<div class="bg-gray-800 w-full text-white">
    {#if runs}       
     <!-- {#each runs as run }
        <h1>{run.title}</h1>
      {/each}     -->
  <!-- <div>{runs}</div>   -->
<RunningCards {runs} urlTag={"show"} />
    {/if}
</div>          
{/if}


<Footer />
</div>