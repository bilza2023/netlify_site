<script>
  import Card from "./Card.svelte";
  export let logoutFn;

 let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>


<div class="flex justify-center w-full">


<div class="relative">
  <button class="flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" on:click={toggleMenu}>
    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  <div class={`
    absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1  bg-gray-800 ring-1 ring-black ring-opacity-5
    ${isMenuOpen ? '' : 'hidden'}
  `}>

    <div class="flex flex-col justify-center">
    <Card url={'/create'} icon=&#x1F4A1; title="Create" />
    <Card url={'/dashboard'} icon=&#x1F5A5; title="DashBoard" />
    <Card url={'/teams'} icon=&#x1F46C; title="Teams" />
    <div class="xs:w-8  sm:w-10 md:w-12 lg:w-15 hover:bg-gray-700">
      <button class="w-full flex flex-col items-center p-2 m-0 rounded hover:bg-gray-500 active:bg-gray-900" on:click={logoutFn}>
        <span class="text-md">&#x1F6EB;</span>
        <span class="text-xs font-md text-white">Logout</span>
      </button>
    </div>
    <Card url={'/docs'} icon=&#x1F4D6; title="Help" />
    </div>

</div>
</div>


</div>
