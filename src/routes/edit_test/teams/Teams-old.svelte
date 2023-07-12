<script>
import Th from "$lib/cmp/Th.svelte";
import { fade } from 'svelte/transition';

import {  classStore } from '../appStore';
$: classes = $classStore;
export let test;

function selectTeam(id) {
    const index = test.members.indexOf(id);
    if (index > -1) {
     test.members = [...test.members.slice(0, index), ...test.members.slice(index + 1)];
    } else {
        test.members = [...test.members, id];
    }
console.log("test.members" , test.members);
}

function teamExists(id) {
    // debugger;
    return test.members.includes(id);
}

</script>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>

<Th title={"Select Class"} icon={"🧑‍🤝‍🧑"}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >

<div>
<div class="flex flex-col w-full">
{#each classes as classObj }
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class= {`w-6/12 mx-auto border-gray-400 border-2 p-1 m-1 text-center
    rounded-md  hover:bg-green-800 hover:cursor-pointer`}
    on:click={()=>selectTeam(classObj._id)}
    >
    {#if teamExists(classObj._id) }
         <span>🎖️ &nbsp;&nbsp;</span>
    {/if}
        {classObj.name}
    </div>
{/each}
</div>

</div>

</div>
</Th>

</div>