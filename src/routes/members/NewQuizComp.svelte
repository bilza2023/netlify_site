<script>
import { toast } from '@zerodevx/svelte-toast';
import { BASE_URL } from '$lib/js/config.js';
export let callback;
let newPRojectName = "";
let email = "";
let password = "";

const handler = async()=>{
// debugger;
const token = localStorage.getItem('token');
//const resp = await fetch( "http://skillzaa.cyclic.app/quiz/new" , {
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
        callback();
    }else {
        toast.push( data.msg );
    }
//   console.log(data);
  // console.log("quizzes",quizzes);
}

</script>


<div class=" border-2 border-white p-2 m-2  text-center rounded-lg ">
<h1 class="m-1 text-slate-200 text-2xl underline">New Member</h1>
<h3 class="text-left ml-2 underline">Member`s Email</h3>
<input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg"  type="email" bind:value={email} >
<h3 class="text-left ml-2 underline">Assign Password</h3>
<input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg"  type="text" bind:value={password} >

<button class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={handler}>Create</button>

</div>