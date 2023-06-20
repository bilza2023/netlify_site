<script>
import Th from "$lib/cmp/Th.svelte";
import FormRow from "../FormRow.svelte";
import { fade } from 'svelte/transition';

import { quizStore , membersStore } from '../store';
let quiz;
let members;

quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = value);

</script>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>

<Th title={"Un-Publish timings"} icon={"⌛"}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >

 

  
<FormRow title="Un-Publish Technique"  >
<select type="datetime-local" class="bg-gray-800 w-full text-center"
    bind:value={quiz.publishObj.unpublishTechnique} >
    <option class="border-b-1 border-white "  value="never">Never</option>
    <option class="border-b-1 border-white"  value="after">After</option>
</select>
</FormRow>

<FormRow title="Publish Hour" >
<input class="bg-gray-700" type="number" bind:value={quiz.publishObj.unpublishHour} min=0 max=23  
>hours
</FormRow>

<FormRow title="Publish Minute"  >
<input class="bg-gray-700" type="number" bind:value={quiz.publishObj.unpublishMin} min=0 max=60
>minutes
</FormRow>





</div>


</Th>

</div>