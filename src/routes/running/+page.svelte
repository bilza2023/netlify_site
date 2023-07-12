<script>

import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import { onMount } from 'svelte';
import loadApp from "../../lib/communicator/loadApp";
 import LocalStorage from '../../lib/communicator/localStorage';
import Card from "./running/Card.svelte";
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import { runsStore } from '../appStore';
// LocalStorage.updateRuns();


onMount(async ()=>{
  try {
        // debugger;
         await loadApp();
      } catch (err){
          toast.push('Failed to load app');
      }
  });    

$: runs = $runsStore;
console.log('runs' ,  runs);

</script>
<div class="bg-gray-800"><!--page div-->
<Nav />

<HdgWithIcon title="Running" , icon ="🏃‍♂️"/>

  
<div class="bg-gray-800 w-full text-white">
  <div class="w-full bg-gray-800 text-white py-6  min-h-screen  justify-center">

  <!-- {#if runs} -->
    <div class="px-28 ">
      {#each runs as run, index}
        <Card {run}   />
        <br/>
        <!-- <h1 class="text-white">{run.title}</h1> -->
      {/each}
    </div>
    <br/>
  <!-- {/if} -->

</div>

</div>          

<Footer />
</div>