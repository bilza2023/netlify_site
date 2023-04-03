I have a +page.svelte component . code is here==>
<script>
 
import {is_login} from "$lib/stores/appStore.js";
import { browser } from '$app/environment';
import MemberTable from "./MemberTable.svelte";
import { toast } from '@zerodevx/svelte-toast';
import { onDestroy } from 'svelte';
import { onMount } from 'svelte';
import NewQuizComp  from "./NewQuizComp.svelte";
import { BASE_URL } from '$lib/js/config.js';

$: members = [];
// let members = [];

let preventClose = true;
  
  function handleBeforeUnload(event) {
    if (preventClose) {
      event.preventDefault();
      event.returnValue = '';
      // if (browser){
      // window.alert("cant stop");
      // }
    }
  }

const deleteFn = (index) =>{
members = members.filter((_, i) => i !== index);
// console.log(members);
} 
const saveAll = async ()=>{
const token = localStorage.getItem('token');
// debugger;
const response = await fetch( `${BASE_URL}/user/members/save` , {
// const response = await fetch('http://localhost/user/login', {
    method: 'POST',
    body: JSON.stringify( {members,token} ),
    headers: { 'Content-Type': 'application/json' }
});
      const data = await response.json();
      if (data.status == "ok"){
        toast.push('saved'); 
        // populate();
      }else {
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
  // console.log(data);
  members = data.members.members; 
  // console.log("quizzes",quizzes);
}); 


</script>
<!--page div-->


<div class="w-ful">

{#if isLogin == false}
<h1><a href="/login">Please login</a></h1>
{/if}


{#if isLogin == true}
<NewQuizComp {members}  {saveAll}/>
<br>

<div class="flex w-full p-2 m-2 bg-gray-400 rounded-md justify-between">
  <h1 class="w-1/4 text-black  text-2xl underline">Members</h1>
  <button class="w-3/4 bg-green-600 hover:bg-green-700 active:bg-green-900 text-white rounded-md p-1 m-1"
  on:click={saveAll}
  >Save All</button>
</div>

<br />
  {#if members}
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
          <MemberTable   {members} {deleteFn}  />
      </tbody>
    </table>
  {/if}

{/if} 


</div><!--page div ends-->

ALso i have NewQuizComp.svelte

<script>
import { toast } from '@zerodevx/svelte-toast';
import { BASE_URL } from '$lib/js/config.js';
let newPRojectName = "";
let email = "";
let password = "";
export let members;
export let saveAll;

const create = async () =>{
  members.push({email,password});
  members = members;
  await saveAll();
};

</script>


<div class=" border-2 border-white p-2 m-2  text-center rounded-lg ">
<h1 class="m-1 text-slate-200 text-2xl underline">New Member</h1>
<h3 class="text-left ml-2 underline">Member`s Email</h3>
<input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg"  type="email" bind:value={email} >
<h3 class="text-left ml-2 underline">Assign Password</h3>
<input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg"  type="text" bind:value={password} >

<button class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={create}>Create</button>

</div>


Problem: I want that when a new item is added into memebrs array in NewQuizComp create function the table at the page.svelt should re-draw but it does not 