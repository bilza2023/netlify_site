<script>
import Thq from "../common/Thq.svelte";
import FormRow from "../common/FormRow.svelte";
import Options from "./options.svelte";
import { fade } from 'svelte/transition';

import { quizStore  } from '../../store.js';
quizStore.subscribe(value => quiz = value);
$: quiz = $quizStore; 
// $: questions = $quizStore.questions;


export let question;
// export let addOption;
// export let deleteOption;
export let ser;


</script>

<Thq title={question.content}  id={question.id} {ser}>

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

<br/>


<Options  {question}/>
</div>

</Thq>

