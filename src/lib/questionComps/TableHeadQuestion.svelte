<script>
export let title;
export let id;
export let ser;
export let deleteQuestion;
export let icon="";
export let visible = false; //why export?
import QDel from "./QDel.svelte";
const  toggleVisibility = ()=> visible = !visible;

</script>

<div class="flex  rounded-t-lg border border-gray-400 p-0">

 <div class="flex items-center justify-center    w-3/12  p-0 bg-gray-900 text-xl rounded-t-lg border border-gray-400 ">
        {`${ser + 1}`}
</div> 

     <div class="  text-center w-full p-2">
        {title} 
    </div>


    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="rounded-t-lg border border-gray-400 p-2 
    hover:cursor-pointer hover:bg-gray-600 active:bg-gray-800 bg-gray-900 w-1/12 text-center"
    >
        {icon}
    </div>


    <QDel {id} {deleteQuestion}/>
    
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="rounded-t-lg border border-gray-400 p-2 
    hover:cursor-pointer hover:bg-gray-600 active:bg-gray-800 bg-gray-900 w-1/12 text-center"
    on:click={toggleVisibility}    
    >
        <span class='text-3xl'>{visible == true ? "-" : "+" }</span>
    </div>
    
</div>


{#if visible==true}
<slot></slot>
{/if}