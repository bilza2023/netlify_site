<script>
import Tf from "./Tf.svelte";
import Th from "./Th.svelte";
import FormRow from "./FormRow.svelte";
import { fade } from 'svelte/transition';

export let quiz;
let visible = true;

  function toggleVisibility() {
    visible = !visible;
  }
</script>

<Th title={quiz.title}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >

 
<FormRow title="Quiz Title">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={quiz.title} 
>
</FormRow>


<FormRow title="Save Responses">
<Tf />
</FormRow>

<FormRow title="Show Intro">
<Tf />
</FormRow>

<FormRow title="Intro Text">
<textarea class="w-full bg-gray-700 color-white"
bind:value={quiz.introText}></textarea>
</FormRow>

<FormRow title="Farewell Text">
<textarea class="w-full bg-gray-700 color-white" bind:value={quiz.farewellText}></textarea>
</FormRow>

</div>



</Th>
