<script>
  let showMenu = false;
  let links = [
    { name: "Survey", url: "/about" }
    // { name: "Contact", url: "/contact" }
  ];
</script>

<div class="relative">
  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded" on:click|preventDefault={() => showMenu = !showMenu}>
  
  Products
  
  </button>
  <div class={`absolute left-0 mt-2 bg-white shadow-md rounded ${showMenu ? 'block' : 'hidden'} `}>

 
      <a class="block px-4 py-2 bg-gray-600 text-white 
      hover:bg-gray-400" href="/create">Create</a>
 
      <a class="block px-4 py-2 bg-gray-600 text-white 
      hover:bg-gray-400" href="/members">Members</a>

      <!-- <a class="block px-4 py-2 bg-gray-600 text-white 
      hover:bg-gray-400" href="/dashboard">Poll</a> -->
      <hr/>
      <a class="block px-4 py-2 bg-gray-600 text-white 
      hover:bg-gray-400" href="/dashboard">Dashboard</a>
    
    
  </div>
</div>