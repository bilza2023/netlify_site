<script>
import AreYouSure from "$lib/cmp/AreYouSure.svelte";
// import { toast } from '@zerodevx/svelte-toast';
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import H1 from '$lib/cmp/H1.svelte';
import Table from "./Table.svelte";
import ToolBar from "./toolbar/ToolBar.svelte";
import Cards from "./Cards.svelte";
import { BASE_URL } from '$lib/js/config.js';
import ajaxPost from "$lib/js/ajaxPost.js";

$: quizzes = [];
let showTable = false;
const toggleShowTable = () => showTable = !showTable;

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
 const token = localStorage.getItem('token');

  const resp = await fetch( `${BASE_URL}/quiz/page/10/0` ,{
  method: 'GET',
  headers: {
    // 'Authorization': `Bearer ${token}`,
    'Authorization': `${token}`
  }
  });

  const data = await resp.json();
//   console.log(data);
  quizzes = data.quizzes; 
  // console.log("quizzes",quizzes);

} catch (error) {
    console.error(error);
}
}
</script>
<div class="bg-gray-800"><!--page div-->
<Nav  isLogin={isLogin}/>

<ToolBar  {toggleShowTable} {showTable}/>

<!--page div-->

{#if isLogin == false}
<div class="bg-gray-800 text-white m-0 py-0 px-6 min-h-screen flex justify-center  " >
<div class="w-11/12">
<h1><a href="/login">Please login</a></h1>
</div>
</div>

{:else}

<div class="flex justify-center">
<h1
class="w-4/12 text-center p-2 m-1 rounded-md text-white text-1xl 
bg-blue-700 my-4"
>Projects</h1>
</div>

<div class="bg-gray-800">

          {#if showTable == true}
              <Table  {quizzes}/>
          {:else }
              <Cards {quizzes} />
          {/if}
</div>          
{/if}


<Footer />
</div>