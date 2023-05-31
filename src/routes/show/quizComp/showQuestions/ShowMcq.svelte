<script>
export let questions;
export let cq;

</script>




<div class=" flex justify-center flex-col text-center ">
  {#each questions[cq].options as option }
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
      on:click={()=>questions[cq].selectedOption = option.id}
      class="p-2 m-2  hover:rounded-2xl  hover:cursor-pointer  text-black  rounded-sm border-gray-900
        {questions[cq].selectedOption == option.id  ? "bg-blue-500" : "bg-gray-300"}
        "
      >
      {option.content}
    </div> 
  {/each}
  </div> 