<script>
export let quizzes; 
  export let urlTag;
  import Card from "./Card.svelte";
  import CardAdd from "./CardAdd.svelte";

    import { onMount } from 'svelte';
// import { templatesStore} from '../../mainStore.js';
// $: templates = $templatesStore; 

onMount(async ()=>{
    // debugger;
    // console.log('templates' , templates);

});
  
</script>

<div class="bg-gray-800 text-white py-6 px-6 min-h-screen flex justify-center">

  {#if quizzes}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
        <CardAdd  />
      {#each quizzes as template, index}
        <Card quiz={template} key={index} {urlTag} />
      {/each}
    </div>
  {/if}

</div>
