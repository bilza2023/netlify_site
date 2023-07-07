<script>

import Tf from "../../lib/form/Tf.svelte";
import FormRow from "../../lib/form/FormRow.svelte";
import Form from "../../lib/form/Form.svelte";
import { fade } from 'svelte/transition';
export let template;

let visible = true;

  function toggleVisibility() {
    visible = !visible;
  }

</script>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>

<Form title={template.title}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >

 
<FormRow title="Quiz Title">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={template.title} 
>
</FormRow>

<FormRow title="Intro Text">
<textarea class="w-full bg-gray-700 color-white"
bind:value={template.introText}></textarea>
</FormRow>

<FormRow title="Farewell Text">
<textarea class="w-full bg-gray-700 color-white" bind:value={template.farewellText}></textarea>
</FormRow>

<FormRow title="Save Responses">
<Tf obj={template} bool_prop="saveResponse" />
</FormRow>

<FormRow title="Show Intro">
<Tf obj={template} bool_prop="showIntro" />
</FormRow>
<!-- 
<FormRow title="Show Farewell Text">
<Tf obj={template} bool_prop="showfarewellText" />
</FormRow> -->

<FormRow title="Show Results to user">
<Tf obj={template} bool_prop="showResult" />
</FormRow>
 
  
<!-- <FormRow title="Users"  >
<Dispatch  />
</FormRow> -->




</div>


</Form>

</div>