I have 3 svelte components one inside another
page.svelte
MemberTable.svelte
MemberRow.svelte

here is code for page.svelte
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

//-- store inside the file
const members = writable([]);
const dirty = writable(false);

$: isDirty = get(dirty);

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
  // const response = await fetch('http://localhost/user/login', {
    method: 'POST',
    body: JSON.stringify( {members :mm ,token} ),
    headers: { 'Content-Type': 'application/json' }
  });
      const data = await response.json();
      if (data.status == "ok"){
        toast.push('saved'); 
        // populate();
      }else {
      dirty.set(false);
      toast.push( data.msg );
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
<!--page div-->


<div class="w-ful">

{#if isLogin == false}
<h1><a href="/login">Please login</a></h1>
{/if}



{#if isLogin == true}
<h1 class="w-full text-white  text-2xl underline text-center">Members</h1>
<br>

<div class="p-2 m-2 bg-gray-300 rounded-lg">  
<button class="w-full bg-green-600 hover:bg-green-700 active:bg-green-900 text-white rounded-md p-1 m-1"
  on:click={saveAll}>Save All</button>
  {#if isDirty}
  <h1 class="bg-red-900 text-white">dirty</h1>
  {/if}
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
          <MemberTable   {members} {deleteFn} {dirty} />
      </tbody>
    </table>
    <br>
    <NewQuizComp {members}  {saveAll} />
  {/if}

{/if} 

<br>
<br>
<br>
<br>
</div><!--page div ends-->

here is code for MemberTable.svelte
<script>
import AreYouSure from "$lib/cmp/AreYouSure.svelte";
import MemberRow from "./MemberRow.svelte";
export let members;
export let dirty;
export let deleteFn;
let editable = false;

const saveEmail = (index,email) =>{

editable = false;
}

</script>

{#each $members as member,index }   
<tr class="text-white bg-gray-900 border-2 border-gray-200">
    <MemberRow {member}{index} {deleteFn} {dirty} />
</tr>
{/each}



<style>
*{
padding:0;
margin:0;
}

</style>

here is code for MemberRow.svelte
<script>
import { get } from 'svelte/store'; 
import AreYouSure from "$lib/cmp/AreYouSure.svelte";
export let member = {};
export let index;
export let dirty;
// export let saveEdit;
export let deleteFn;
let disabledVar = true;


</script>
 
<td class="border text-center">{index+1}</td>
    
    <td class="border text-center">
      <input 

       disabled={disabledVar}
        class="bg-gray-600 text-white p-0 m-0 text-center rounded-md
        {disabledVar == true ? "bg-gray-600" : "bg-green-600" }
        "
        type="email"   bind:value = {member.email}
      >
    </td>

    <td class="border text-center">
    <input 
    disabled= {disabledVar}
    class=" text-white p-0 m-0 text-center rounded-md
    {disabledVar == true ? "bg-gray-600" : "bg-green-600" }
    "
    type="email"   bind:value = {member.password}
    >
    </td>

<td class="p-1 border bg-gray-700 text-center text-white hover:bg-gray-700 active:bg-gray-800 rounded-md transition duration-200" >
<button on:click={()=>{disabledVar = !disabledVar; dirty.set(true);console.log(get(dirty))}}>

{#if disabledVar == true}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="currentColor" d="M19.7,5.3c-0.4-0.4-1-0.4-1.4,0l-1.3,1.3l2.3,2.3l1.3-1.3c0.4-0.4,0.4-1,0-1.4L19.7,5.3z"/>
  <path fill="currentColor" d="M17.3,7.7l-10,10c-0.1,0.1-0.2,0.2-0.4,0.2H4c-0.6,0-1-0.4-1-1v-3.9c0-0.2,0.1-0.3,0.2-0.4l10-10c0.4-0.4,1-0.4,1.4,0l3.9,3.9C17.7,6.7,17.7,7.3,17.3,7.7z"/>
  <path fill="currentColor" d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,20H4V4h16V20z"/>
</svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="green" d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M19,19H5V5h14V19z"/>
  <path fill="green" d="M15.3,7.7l-3.9-3.9c-0.4-0.4-1-0.4-1.4,0l-10,10c-0.1,0.1-0.2,0.2-0.2,0.4v3.9c0,0.6,0.4,1,1,1h3.9c0.2,0,0.3-0.1,0.4-0.2l10-10c0.4-0.4,0.4-1,0-1.4L15.3,7.7z"/>
</svg>

{/if}

</button>
</td>

<td class="hover:bg-red-200">
  
  <AreYouSure {deleteFn} {index}/>
</td>
 


<style>
*{
padding:0;
margin:0;
}
</style>

The problem is the when the on:click event in MemberRow is triggered the dirty is updated since console.log prints true 


<td class="p-1 border bg-gray-700 text-center text-white hover:bg-gray-700 active:bg-gray-800 rounded-md transition duration-200" >
<button on:click={()=>{disabledVar = !disabledVar; dirty.set(true);console.log(get(dirty))}}>

But the if statement in page.svelte does not wrok / update
{#if isDirty}
  <h1 class="bg-red-900 text-white">dirty</h1>
  {/if}