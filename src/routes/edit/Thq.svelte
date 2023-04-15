<script>
export let title;
export let id;
export let visible = true;
import QDel from "./QDel.svelte";
const  toggleVisibility = ()=> visible = !visible;
export let deleteQuestion;
</script>

<div class="flex  rounded-t-lg border border-gray-400 p-0">

     <div class="  text-center w-full p-2">
        {title} 
    </div>
     
    <QDel deleteFn={deleteQuestion} {id}/>
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="rounded-t-lg border border-gray-400 p-2 
    hover:cursor-pointer hover:bg-gray-600 active:bg-gray-900"
    on:click={toggleVisibility}    
    >
        {visible == true ? "Hide" : "Show" }
    </div>
    
</div>


{#if visible==true}
<slot></slot>
{/if}