<script>
import Thq from "../common/Thq.svelte";
import Tf from "../common/Tf.svelte";
import FormRow from "../common/FormRow.svelte";
import Options from "./options.svelte";
import { fade } from 'svelte/transition';

// import { quizStore  } from '../../store.js';
// quizStore.subscribe(value => quiz = value);
// $: quiz = $quizStore; 
// $: questions = $quizStore.questions;


export let question;
// export let addOption;
// export let deleteOption;
export let ser;


</script>

<Thq title={question.content}  id={question.id} {ser} icon=&#x2714;>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >


<FormRow title="Question">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={question.content} >
</FormRow>

<FormRow title="Explanation">
<textarea class="w-full bg-gray-700 color-white"
bind:value={question.explanation}></textarea>
</FormRow>

<FormRow title="Required">
<Tf obj={question} bool_prop="required" />
</FormRow>

<FormRow title="MultiSelect">
<Tf obj={question} bool_prop="multiSelect" />
</FormRow>

<FormRow title="Display Option">
        <select class="w-full bg-gray-700 text-white text-center" 
        bind:value="{question.displayOption}">
            <option class="m-1 p-1" value="dropdown">Drop Down</option>
            <option class="m-1 p-1" value="check">Check Marks</option>
            <option class="m-1 p-1" value="radio">Radio Buttons</option>
            <option class="m-1 p-1" value="bars">Bars</option>
        </select>
</FormRow>

<br/>


<Options  {question}/>
</div>

</Thq>

