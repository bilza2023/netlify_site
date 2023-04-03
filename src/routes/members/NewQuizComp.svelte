<script>
import { toast } from '@zerodevx/svelte-toast';
import { BASE_URL } from '$lib/js/config.js';
let newPRojectName = "";
let email = "";
let password = "";
export let members;
export let saveAll;

const create = async () =>{
  // members.push({email,password});
   members.update(arr => [...arr, { email, password }]);
  // members.update(arr => [{ email, password }, ...arr]);
 email = "";
password = "";
  await saveAll();
};

</script>


<div class=" border-2 border-white p-2 m-2  text-center rounded-lg ">
<!-- <h1 class="m-1 text-slate-200 text-2xl underline">New Member</h1> -->
<div class="flex">
<h3 class="w-4/12 text-center  ml-2 underline">Assign Password</h3>
<h3 class="w-4/12 text-center ml-2 underline">Member`s Email</h3>
<div class="w-4/12" ></div>

</div>

<div class="flex">
<input class="w-4/12 bg-gray-700 text-white   m-1 rounded-lg"  type="email" bind:value={email} >
<input class="w-4/12 bg-gray-700 text-white   m-1 rounded-lg"  type="text" bind:value={password} >

<div class="w-4/12" >
<button class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:from-green-700 active:to-green-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={create}>New</button>

</div>
</div>




</div>