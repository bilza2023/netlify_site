<script>
  import { onMount } from 'svelte';
  import  generateRandomGradient  from "$lib/js/gradiant.js";

export let title;


const skrink = (txt)=>{
  if (txt.length <= 30) {
    return txt;
  } else {
    return txt.slice(0, 27) + "...";
  }    
}
</script>
<!-- <h1 class="text-black">ssssss</h1> -->
<!-- style= {`background-image: ${generateRandomGradient()}`} -->
<a href="" class="flex-shrink-0 border-2   md:w-1/2 lg:w-1/3 p-2 border-white ">
    <div class="bg-gray-700 hover:bg-gray-800 rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer border-2 border-white text-center">
    <div class="p-2">
    <p class="text-white overflow-hidden overflow-ellipsis">{skrink(title)}</p>
    </div>
    </div>
  </a>
      


<style>
  .bg-gradient-to-r {
    animation: gradient 5s linear infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
</style>
