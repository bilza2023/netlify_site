<script>
export let list;

const skrink = (txt)=>{
  if (txt.length <= 30) {
    return txt;
  } else {
    return txt.slice(0, 27) + "...";
  }    
}
</script>



<div class="flex flex-wrap justify-start">

{#each list as item}
  <a href={item.link} class="flex-shrink-0 border-  w-full md:w-1/2 lg:w-1/3 p-2 border-white ">
    <div class="bg-gray-700 hover:bg-gray-800 rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer border-2 border-white text-center">
      <div class="p-2">
        <img class="mx-auto" src={item.imageSrc} alt={item.imageAlt} />
        <p class="text-white overflow-hidden overflow-ellipsis">{skrink(item.title)}</p>
      </div>
    </div>
  </a>

{/each}
  <!-- Repeat the above code block for all flex items -->
</div>





