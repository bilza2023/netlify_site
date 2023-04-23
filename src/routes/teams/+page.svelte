<script>
  import { storeMembers } from './store.js';
  import Member from './MemComp.svelte';

  // Update the value of the store
  storeMembers.set(['Alice', 'Bob', 'Charlie']);
</script>

<Member />