<script>


import FormRow from "$lib/form/FormRow.svelte";
import TableHeadQuestion from "$lib/questionComps/TableHeadQuestion.svelte";
import { fade } from 'svelte/transition';
import MultiSelectToggle from "./MultiSelectToggle.svelte";
import Options from "./Options.svelte";

////---export

export let question;
export let deleteQuestion;
export let ser;


</script>

<TableHeadQuestion title={question.content} id={question.id}  {deleteQuestion} {ser} icon=&#x1F531;>


<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >


<FormRow title="Question">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={question.content} >
</FormRow>
 
<FormRow title="Multi Select">
<MultiSelectToggle question={question} bool_prop="multiSelect"  />
</FormRow>

<FormRow title="Explanation">
<textarea class="w-full bg-gray-700 color-white"
bind:value={question.explanation}></textarea>
</FormRow>

<br/>


<div class="text-center">
        <Options {question} />
    <br/>
</div>

</div>

</TableHeadQuestion>