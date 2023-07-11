<script>
// import DispatchBlock from "./DispatchBlock.svelte";
import Th from "$lib/cmp/Th.svelte";
import FormRow from "./FormRow.svelte";
import { fade } from 'svelte/transition';

import { testsStore , classStore } from '../appStore';
$:quiz =  $testsStore;
$: classes = $classStore;



</script>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>

<Th title={"Select Class"} icon={"🧑‍🤝‍🧑"}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >

 
<div>

{#each classes as classObj }
    <h1>{classObj.name}</h1>
{/each}


</div>

</div>
</Th>

</div>