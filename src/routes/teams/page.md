<script>
  import { storeMembers , storeDirty } from './store.js';
  import Member from './MemTable.svelte';

  // Update the value of the store
  storeMembers.set(['Alice', 'Bob', 'Charlie']);
  
  let dirty;
  storeDirty.subscribe(value => {dirty = value});
storeDirty.set(true);
</script>


<div class="p-0 m-0 width-full h-screen bg-gray-800 text-white">


<Member />

{#if dirty}
<h1>Dirty!</h1>
{/if}

<hr>
<button
on:click={()=> storeDirty.set(!dirty)}
>Toggle Dirty</button>


</div>


