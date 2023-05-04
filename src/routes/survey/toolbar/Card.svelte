<script>
export let icon;
export let handler;
export let title;
</script>

<div class="">
    <button class="w-full flex flex-col items-center p-1  bg-stone-800 rounded hover:bg-gray-700 active:bg-gray-900"
    on:click={()=>handler() }
    >
      <span class="text-xl">{icon}</span>
      <span class="text-sm text-white">{title}</span>
    </button>
  </div>