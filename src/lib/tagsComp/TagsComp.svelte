<script>
import { onMount } from 'svelte';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import ajaxGet from "$lib/js/ajaxGet.js";
import TagItemProduct from "./TagItemProduct.svelte";
import TagItemAll from "./TagItemAll.svelte";

export let incommingTags = [];
export let addProductTags;
export let removeProductTags;

let allTags = [];
let allTagsLeft = [];

function getTagsLeft(allTags, incommingTags) {
  const incommingTagIds = incommingTags.map(tag => tag._id);
  const tagsLeft = allTags.filter(tag => !incommingTagIds.includes(tag._id));
  return tagsLeft;
}

function add(id) {
  // debugger;
  const tag = allTags.find(tag => tag._id === id);
  incommingTags.push(tag);
  incommingTags = incommingTags;
  addProductTags(tag);
}
function remove(id) {
  incommingTags = incommingTags.filter(tag => tag._id !== id);
  removeProductTags(id);
}

onMount(async ()=>{
 try { 
      // debugger;
  const resp = await ajaxGet( `${BASE_URL}/tag/all`);
  if(resp.ok){
    const data = await resp.json();
    // templatesStore.set(data.surveys); 
    allTags = data.tags;
    allTagsLeft = getTagsLeft(allTags,incommingTags);
    
  }else {
    toast.push("failed to load Students");
  }
  } catch (error) {
    toast.push("failed to load..");
  }
});

  // Reactive statement to update allTagsLeft
$: allTagsLeft = getTagsLeft(allTags, incommingTags);
</script>
<!-- //////////////////////////////////////////// -->
<div class="flex flex-wrap gap-1 border-white p-1 m-1 rounded-md">
{#each incommingTags as incommingTag }

<TagItemProduct  tag={incommingTag} {remove}/>
{/each}
</div>
<hr>
<!-- Incomming -->
<div class="flex flex-wrap border-white p-1 m-1 rounded-md">
{#each allTagsLeft as tag }
<TagItemAll {add} {tag}/>

{/each}

</div>

