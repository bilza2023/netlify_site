<script>
import Option from "./Option.svelte";
import { v4 as uuid } from 'uuid';

// import unPublish from "../../unPublish"; 

export let question;

const deleteOption = (option_id )=>{
question.options = question.options.filter(option => option.id !== option_id);
}; 
 

const addOption = () => {
 question.options = [... question.options , {id : uuid() , content : ""}];
};

const mark_correct = (option_id) => {

      if (question.multiSelect == false) {
          question.correctOptions = [option_id];
      } 
      else {
        let index = question.correctOptions.indexOf(option_id);
        if (index > -1) {
          //--remove the option if already exists
          question.correctOptions.splice(index, 1);
        } else {
          question.correctOptions.push(option_id);
        }
     }
} 


</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex bg-green-600 m-2 p-2 w-2/12 rounded-sm focus:outline-none active:bg-green-400 hover:bg-green-500 hover:cursor-pointer"
on:click={()=>addOption(question.id)}
>

<span class="">Add Option</span> &nbsp;&nbsp;&nbsp;&nbsp;
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 2v20m10-10H2" stroke="white" stroke-width="3" fill="none"/>
  </svg>
</div>

<br/>

    <div class="text-center">
    {#if question.options && question.options.length > 0}
    {#each question.options as option}
   <Option {option} {question} {deleteOption} {mark_correct}/>
    {/each}
    {/if}
    </div>
