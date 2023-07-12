<script>

import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import { onMount } from 'svelte';
import loadApp from "../../lib/communicator/loadApp";

// import RunningCards from "./running/RunningCards.svelte";
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import { runsStore } from '../appStore';

$: runs = $runsStore;
</script>
<div class="bg-gray-800"><!--page div-->
<Nav />

<HdgWithIcon title="Running" , icon ="🏃‍♂️"/>

 
<div class="bg-gray-800 w-full text-white">
  <div class="w-full bg-gray-800 text-white py-6  min-h-screen  justify-center">

  <!-- {#if runs} -->
    <div class="px-28 ">
      {#each runs as run, index}
        <!-- <Card {run} key={index} {urlTag} /> -->
        <h1 class="text-white">{run.title}</h1>
      {/each}
    </div>
    <br/>
  <!-- {/if} -->

</div>

</div>          

<Footer />
</div>