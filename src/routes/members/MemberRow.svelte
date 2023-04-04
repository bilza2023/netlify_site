<script>
import { get } from 'svelte/store'; 
import AreYouSure from "$lib/cmp/AreYouSure.svelte";
export let member = {};
import {  dirty } from "./store.js";
export let index;
// export let dirty;
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

<td class="p-1 border 
{ disabledVar == false ? "bg-green-700 hover:bg-green-800" : "bg-gray-700 hover:bg-gray-800"}
 text-center text-white  active:bg-gray-800 rounded-md transition duration-200" >
<button on:click={()=>{disabledVar = !disabledVar; dirty.set(true);console.log(get(dirty))}}>

{#if disabledVar == true}
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4445 19.6875H20.9445M14.4443 5.68747L5.44587 14.6859C4.78722 15.3446 4.26719 16.1441 4.10888 17.062C3.94903 17.9888 3.89583 19.139 4.44432 19.6875C4.99281 20.236 6.14299 20.1828 7.0698 20.0229C7.98772 19.8646 8.78722 19.3446 9.44587 18.6859L18.4443 9.68747M14.4443 5.68747C14.4443 5.68747 17.4443 2.68747 19.4443 4.68747C21.4443 6.68747 18.4443 9.68747 18.4443 9.68747M14.4443 5.68747L18.4443 9.68747" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
{:else}
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4445 19.6875H20.9445M14.4443 5.68747L5.44587 14.6859C4.78722 15.3446 4.26719 16.1441 4.10888 17.062C3.94903 17.9888 3.89583 19.139 4.44432 19.6875C4.99281 20.236 6.14299 20.1828 7.0698 20.0229C7.98772 19.8646 8.78722 19.3446 9.44587 18.6859L18.4443 9.68747M14.4443 5.68747C14.4443 5.68747 17.4443 2.68747 19.4443 4.68747C21.4443 6.68747 18.4443 9.68747 18.4443 9.68747M14.4443 5.68747L18.4443 9.68747" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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