<script>
import AreYouSure from "$lib/cmp/AreYouSure.svelte";
export let member;
export let index;
let editable = false;

const save = () =>{

editable = false;
}
const deleteMember = () =>{

}
</script>


          <tr class="text-white bg-gray-900 border-2 border-gray-200">
            <td class="border text-center">{index+1}</td>
            
            {#if editable == true}
            <td class="border text-center">
            <input 
            class="bg-gray-600 text-white p-0 m-0 text-center"
            type="email" name="" id="" value="{member.email}">
            </td>

            <td class="border text-center">
            <input 
            class="bg-gray-600 text-white p-0 m-0 text-center"
            type="email" name="" id="" value="{member.password}">
            </td>
            
            {:else}
            <td class="border text-center">{member.email}</td>    
            <td class="border text-center text-gray-500">xxx-xxx-xxx</td>
            {/if}


<!-- svelte-ignore a11y-click-events-have-key-events -->
<td class="p-1 border bg-blue-900 text-center text-white hover:bg-blue-700 active:bg-blue-800 rounded-md transition duration-200"
on:click={()=>editable = true}
>
     Edit
</td>

<td class="p-1 border bg-green-900 text-center text-white hover:bg-green-700 active:bg-green-800 rounded-md transition duration-200">
 <span on:click={save}>
    Save
 </span>
</td>

<td class="border bg-red-900 text-center text-white hover:bg-gray-700 active:bg-gray-800 rounded-md transition duration-200">
  
  <AreYouSure deleteFn={deleteMember} {index}/>
</td>
            
</tr>


<style>
*{
padding:0;
margin:0;
}

</style>