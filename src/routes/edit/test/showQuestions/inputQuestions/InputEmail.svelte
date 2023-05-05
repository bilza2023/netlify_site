<script>

import Thq from "./common/Thq.svelte";
import FormRow from "../../FormRow.svelte";

import { fade } from 'svelte/transition';

export let question;
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

</div>

</Thq>

