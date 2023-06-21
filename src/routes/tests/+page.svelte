<script>
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import Cards from "./tests/Cards.svelte";

import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import { BASE_URL } from '$lib/js/config.js';
import ajaxGet from "$lib/js/ajaxGet.js";
import { toast } from '@zerodevx/svelte-toast';



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
  const resp = await ajaxGet( `${BASE_URL}/survey/pagetest/10/0`);
  if(resp.ok){
    const data = await resp.json();
    tests = data.surveys; 
  }else {
    toast.push("failed to load Tests");
  }
 } catch (error) {
    toast.push("failed to load..");
 }
}

</script>
<div class="bg-gray-800"><!--page div-->
<Nav />


<HdgWithIcon title="Tests" , icon ="🧪"/>
{#if isLogin}
            
<div class="bg-gray-800 w-full">            
<Cards quizzes={tests} urlTag={"edit"} />
</div>          
{/if}

<Footer />
</div>