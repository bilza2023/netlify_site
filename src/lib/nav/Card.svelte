<script>
export let url;
export let icon;
export let title;
</script>

<div class="xs:w-8  sm:w-10 md:w-12 lg:w-15">
  <a href= {`${url}`} >
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900">
      <span class="text-md">{icon}</span>
      <span class="text-xs font-md text-white">{title}</span>
    </button>
  </a>
</div>
