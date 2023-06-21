<script>
import Tf from "../Tf.svelte";
import Th from "$lib/cmp/Th.svelte";
import FormRow from "../FormRow.svelte";
import { fade } from 'svelte/transition';

import { quizStore , membersStore } from '../store';
let quiz;
let members;
quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = value);


let visible = true;

  function toggleVisibility() {
    visible = !visible;
  }


</script>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>

<Th title={quiz.title}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >

 
<FormRow title="Quiz Title">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={quiz.title} 
>
</FormRow>

<FormRow title="Intro Text">
<textarea class="w-full bg-gray-700 color-white"
bind:value={quiz.introText}></textarea>
</FormRow>

<FormRow title="Farewell Text">
<textarea class="w-full bg-gray-700 color-white" bind:value={quiz.farewellText}></textarea>
</FormRow>

<FormRow title="Save Responses">
<Tf obj={quiz} bool_prop="saveResponse" />
</FormRow>

<FormRow title="Show Intro">
<Tf obj={quiz} bool_prop="showIntro" />
</FormRow>
<!-- 
<FormRow title="Show Farewell Text">
<Tf obj={quiz} bool_prop="showfarewellText" />
</FormRow> -->

<FormRow title="Show Results to user">
<Tf obj={quiz} bool_prop="showResult" />
</FormRow>
 
  

</div>


</Th>

</div>