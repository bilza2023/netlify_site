<script>
import FormRow from "./FormRow.svelte";
import Tf from "./Tf.svelte";
export let quiz;
 import { fade } from 'svelte/transition';
  let visible = true;

  function toggleVisibility() {
    visible = !visible;
  }
</script>



<!-- /////////////////////////// -->
<div class="flex  rounded-t-lg border border-gray-400 p-0">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="rounded-t-lg border border-gray-400 p-2 
    hover:cursor-pointer"
    on:click={toggleVisibility}    
    >
        {visible == true ? "Hide" : "Show" }
    </div>
    
    <div class="  text-center w-full p-2">
        {quiz.title} 
    </div>
</div>

<!-- ///////////////////////////////////// -->
{#if visible == true}
    
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

</div>


{/if}
