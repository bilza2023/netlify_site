<script>
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import RunningCards from "./running/RunningCards.svelte";
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import Agent from "$lib/common/Agent";

import {runningStore} from "./dashboardStore";
$: running = $runningStore;

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
                    const resp = await Agent.read('test');

                    if(resp.ok){
                        const data = await resp.json();
                        runningStore.set(data.items); 
                    
                    }else {
                        toast.push("failed to load Tests");
                    }
          }
    } catch (error) {
    }
});

</script>
<div class="bg-gray-800"><!--page div-->
<Nav />

<HdgWithIcon title="Running" , icon ="🏃‍♂️"/>
{#if isLogin}

<div class="bg-gray-800 w-full">
            
<RunningCards quizzes={running} urlTag={"show"} />

</div>          
{/if}


<Footer />
</div>