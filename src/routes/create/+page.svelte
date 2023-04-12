<script>
import {is_login} from "$lib/stores/appStore.js";
import MainNav from "$lib/cmp/MainNav.svelte";
import { toast } from '@zerodevx/svelte-toast';
import { BASE_URL } from '$lib/js/config.js';

let isLogin =true;
// is_login.subscribe( (p)=> isLogin=p);


let newPRojectName = "";

const handler = async()=>{
// debugger;
const token = localStorage.getItem('token');

const resp = await fetch( `${BASE_URL}/quiz/new` , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {token ,title :newPRojectName} )
});

    newPRojectName = "";
  const data = await resp.json();
    if (data.status == "ok"){
        // callback();
        toast.push( "Success" );

    }else {
        toast.push( data.msg );
    }

}

// const callback = ( )=> {};
</script>

<MainNav  {isLogin}/>
<div class="bg-gray-800 text-white m-0 py-0 px-6 min-h-screen">

<!--page div-->
<div class="w-ful">
<br>
<br>
{#if isLogin == false}
<h1><a href="/login">Please login</a></h1>
{/if}
<br>

{#if isLogin == true}
<div class=" border-2 border-white p-2 m-2  text-center rounded-lg ">
<h1 class="m-1 text-slate-200 text-2xl underline">New Project</h1>
<input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg"  type="text" bind:value={newPRojectName} >
<button class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={handler}>Create</button>

</div>
<br>
{/if}

</div>

</div>