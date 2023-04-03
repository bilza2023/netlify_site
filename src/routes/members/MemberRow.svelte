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