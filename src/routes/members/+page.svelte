<script>
// import { get} from 'svelte/store'; 
// import {is_login} from "$lib/stores/appStore.js";
import { browser } from '$app/environment';
// import MemberTable from "./MemberTable.svelte";
import { toast } from '@zerodevx/svelte-toast';
import { onDestroy } from 'svelte';
import NewQuizComp  from "./NewQuizComp.svelte";
import { BASE_URL } from '$lib/js/config.js';
import { membersStore, storeDirty } from "./store.js";
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import { onMount } from 'svelte';
//-- store inside the file


let isLogin=false;

$: isDirty = $storeDirty;
let members = [];
// debugger;
// $: members = $membersStore;
membersStore.subscribe((value) => {
  members = value;
});

function handleBeforeUnload(event) {
  if ( get(dirty) ) {
    event.preventDefault();
    event.returnValue = '';
  }
}

const deleteFn = (index) =>{
  // members.update(arr => arr.filter((_, i) => i !== index));
  storeDirty.set(true);
  // console.log(members);
} 

const saveAll = async ()=>{ 
  const token = localStorage.getItem('token');
  // debugger;
  // const mm = get(members);
  const response = await fetch( `${BASE_URL}/user/members/save` , {
    method: 'POST',
    body: JSON.stringify( {members :mm ,token} ),
    headers: { 'Content-Type': 'application/json' }
  });
      // debugger;
      if (response.ok){
      const data = await response.json();
      // members.set(data.members);
      membersStore.update(() => ({ ...data.members }));
      // console.log("members" , members);
        toast.push('saved'); 
      }else {
      const data = await response.json();
      storeDirty.set(false);
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

onMount(async () => {
  const token = await localStorage.getItem("token");
      // debugger;
          if (token == null || token.length == 0) {
              isLogin = false;
          }else {
              isLogin = true;
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
          }
  
}); 


</script>



<Nav {isLogin}/>
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
  {#if members.length}
   
          <!-- <MemberTable    {deleteFn}  /> -->
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
