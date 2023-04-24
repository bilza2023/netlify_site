<script>
import { storeMembers,storeDirty } from './store.js';
import AreYouSure from "$lib/cmp/AreYouSure.svelte";
  // Use the value of the store
  // let members;
  // storeMembers.subscribe(value => {
  //   members = value;
  // });
$: members = $storeMembers;
// $: dirty = $storeDirty;

const deleteFn = (_id) => {
  storeMembers.update(members => members.filter(member => member._id !== _id));
  storeDirty.set(true);
}
// const reset = async ()=>{
// storeMembers.set(['Ali', 'Jamal', 'Tariq']);
// }  
const addMember = async (member)=>{
  storeMembers.update(members => [...members, member]);
}

</script>


<table class="w-8/12 text-white border-separate rounded mx-auto">
  {#each members as member, index}
  <tr>
      <td class="border text-center">{index+1}</td>
    
    <td class="border text-center">
      <input 
       disabled={member.clean} 
        class="bg-gray-600 text-white p-0 m-0 text-center rounded-md
        {member.clean == true ? "bg-gray-600" : "bg-red-900" }
        "
        type="email"   bind:value = {member.email}
      >
    </td>

    <td class="border text-center">
    <input 
    disabled= {member.clean}
    class=" text-white p-0 m-0 text-center rounded-md
    {member.clean == true ? "bg-gray-600" : "bg-red-900" }
    "
    type="email"   bind:value = {member.password}
    >
    </td>

<td class="p-1 border 
{ member.clean == false ? "bg-red-900 hover:bg-red-700" : "bg-gray-700 hover:bg-gray-800"}
 text-center text-white  active:bg-gray-800 rounded-md transition duration-200" >
<button on:click={()=>{member.clean = !member.clean}}>
  <span class="text-2xl">&#x270E;</span>
</button>
</td>

<td class="p-1 border 
{ member.clean == false ? "bg-red-900 hover:bg-red-700 active:bg-red-400" 
: "bg-gray-700 hover:bg-gray-800 active:bg-gray-400"}
 text-center text-white  active:bg-gray-800 rounded-md transition duration-200 hover:cursor-pointer">
  <!-- <span class="text-2xl">&#x1F5D1;</span> -->
  <AreYouSure {deleteFn} index= {member._id}/>
</td>
 
</tr>
    
  {/each}
</table>

<!-- <button on:click|preventDefault={reset} class="bg-red-900 text-white">
Change</button>

<button on:click|preventDefault={()=>addMember("Jill")} class="bg-red-900 text-white">
addMember</button> -->