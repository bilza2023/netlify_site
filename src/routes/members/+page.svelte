<script>
import { writable,get } from 'svelte/store'; 
import {is_login} from "$lib/stores/appStore.js";
import { browser } from '$app/environment';
import MemberTable from "./MemberTable.svelte";
import { toast } from '@zerodevx/svelte-toast';
import { onDestroy } from 'svelte';
import { onMount } from 'svelte';
import NewQuizComp  from "./NewQuizComp.svelte";
import { BASE_URL } from '$lib/js/config.js';
import { members, dirty } from "./store.js";
import NavMain from '$lib/cmp/NavMain.svelte';
import Footer from '$lib/cmp/Footer.svelte';
//-- store inside the file

$: isDirty = $dirty;

function handleBeforeUnload(event) {
  if ( get(dirty) ) {
    event.preventDefault();
    event.returnValue = '';
  }
}

const deleteFn = (index) =>{
  members.update(arr => arr.filter((_, i) => i !== index));
  dirty.set(true);
  // console.log(members);
} 

const saveAll = async ()=>{ 
  const token = localStorage.getItem('token');
  // debugger;
  const mm = get(members);
  const response = await fetch( `${BASE_URL}/user/members/save` , {
    method: 'POST',
    body: JSON.stringify( {members :mm ,token} ),
    headers: { 'Content-Type': 'application/json' }
  });
      const data = await response.json();
      // debugger;
      if (data.success == true){
        toast.push('saved'); 
      }else {
      dirty.set(false);
      toast.push( data.message );
      }


}  

onDestroy(() => {
  if (browser){
  window.removeEventListener('beforeunload', handleBeforeUnload);
  }
});

if (browser){
 window.addEventListener('beforeunload', handleBeforeUnload);
}

let isLogin =true; //make it false again
// is_login.subscribe( (p)=> isLogin=p);

onMount(async () => {
  const token = localStorage.getItem('token');

  const resp = await fetch( `${BASE_URL}/user/members` ,{
  method: 'GET',
  headers: {
    // 'Authorization': `Bearer ${token}`,
    'Authorization': `${token}`
  }
  });

  const data = await resp.json();
  console.log(data);
  members.update(_ => data.members.members);
  // console.log($members);
}); 


</script>



<NavMain isLogin={isLogin}/>
<div class="bg-gray-800 text-white m-0 py-0 px-6 min-h-screen">
<br>
<!--page div-->

<div class="w-ful">

{#if isLogin == false}
<h1><a href="/login">Please login</a></h1>
{/if}



{#if isLogin == true}
<h1 class="w-full text-white  text-2xl underline text-center">Members</h1>
<br>
   <NewQuizComp {members}  {saveAll} />
<br>

<div class="p-2 m-2 bg-gray-300 rounded-lg">  
<button class="w-full 
{isDirty ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700" }
  active:bg-green-900 text-white rounded-md p-1 m-1"
  on:click={saveAll}>Save All</button> 
</div>

<br />
  {#if $members.length}
    <table class="w-full border-collapse table-responsive border-white">
      <thead class="">
        <tr class="bg-gray-900 text-white border-2 border-gray-200">
          <td class="border text-center">Ser</td>
          <td class="border text-center">Email</td>
          <td class="border text-center">Password</td>
          <td class="border text-center">Edit</td>
          <td class="border text-center">Delete</td>
        </tr>
      </thead> 
      <tbody>
          <MemberTable    {deleteFn}  />
      </tbody>
    </table>
  {/if}

{/if} 

<br>
<br>
<br>
<br>
</div><!--page div ends-->

<br>
<br> 
</div><!--app-->


<Footer />
