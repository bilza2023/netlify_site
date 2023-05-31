<script>
export let option;
export let question;
export let deleteOption;
</script>
<div class="flex justify-center mb-1 border-2 border-gray-400 mx-10">    
  <div class="w-10/12">
    <input class="bg-gray-500 text-white w-full" type="text" bind:value={option.content} />
  </div>
  <button class="w-2/12 bg-gray-600 rounded-sm focus:outline-none active:bg-red-900 hover:bg-red-500 hover:cursor-pointer mx-2 my-1" on:click={()=>deleteOption(question.id,option.id)}>
    <span class="text-xl">🗑️</span>
  </button>
</div>