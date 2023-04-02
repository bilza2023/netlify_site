<script>
import {is_login} from "$lib/stores/appStore.js";
import AreYouSure from "$lib/cmp/AreYouSure.svelte";
import MemberRow from "./MemberRow.svelte";
import { toast } from '@zerodevx/svelte-toast';
let isLogin =true; //make it false again
// is_login.subscribe( (p)=> isLogin=p);

import { onMount } from 'svelte';
import NewQuizComp  from "./NewQuizComp.svelte";
import { BASE_URL } from '$lib/js/config.js';

// $: members = [
let members = [
{email : "abc@jj.com", password : "123456"},
{email : "abc@jj.com", password : "123456"},
{email : "abc@jj.com", password : "123456"},
{email : "abc@jj.com", password : "123456"},
{email : "abc@jj.com", password : "123456"},
{email : "abc@jj.com", password : "123456"},
{email : "abc@jj.com", password : "123456"},
{email : "abc@jj.com", password : "123456"},
{email : "abc@jj.com", password : "123456"},
{email : "abc@jj.com", password : "123456"}
];

const deleteQuiz = async (index)=>{
// debugger;
const token = localStorage.getItem('token');
const q = quizzes[index];
const response = await fetch( `${BASE_URL}/member/del` , {
// const response = await fetch('http://localhost/user/login', {
    method: 'POST',
    body: JSON.stringify( {id : q._id,token} ),
    headers: {
      'Content-Type': 'application/json'
    }
});
      const data = await response.json();
      if (data.status == "ok"){
        toast.push('deleted'); 
        populate();
      }else {
        toast.push( data.msg );
      }
}//del fn

// onMount(async () => {
//   if (isLogin == true){
//       populate();
//   }
// }); 
// const populate = async () =>{
// try {
// const token = localStorage.getItem('token');

//   const resp = await fetch( `${BASE_URL}/members/10/0` ,{
//   method: 'GET',
//   headers: {
//     // 'Authorization': `Bearer ${token}`,
//     'Authorization': `${token}`
//   }
//   });

//   const data = await resp.json();
// //   console.log(data);
//   members = data.members; 
//   // console.log("quizzes",quizzes);

// } catch (error) {
//     console.error(error);
// }
// }
</script>
<!--page div-->
<div class="w-ful">

{#if isLogin == false}
<h1><a href="/login">Please login</a></h1>
{/if}


{#if isLogin == true}
<NewQuizComp callback={""} />
<br>

<h1 class="m-1 text-slate-200 text-2xl mt-2 underline text-center">Members</h1>
<br />
  {#if members}
    <table class="w-full border-collapse table-responsive border-white">
      <thead class="">
        <tr class="bg-gray-900 text-white border-2 border-gray-200">
          <td class="border text-center">Ser</td>
          <td class="border text-center">Email</td>
          <td class="border text-center">Password</td>
          <td class="border text-center">Edit</td>
          <td class="border text-center">Save</td>
          <td class="border text-center">Delete</td>
        </tr>
      </thead> 
      <tbody>
        {#each members as member,index }
          <MemberRow   {member} {index}  />
        {/each}
      </tbody>
    </table>
  {/if}

{/if} 


</div><!--page div ends-->