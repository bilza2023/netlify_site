<script>
import { fade } from 'svelte/transition';

</script>

<!--out:fade={{ delay: 300 }}-->
<div  class="bg-stone-500 m-1 p-1 rounded text-center " in:fade={{ delay: 300 }}  >

<slot></slot>
</div>