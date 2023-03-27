<script>
import { goto } from '$app/navigation';
export let title = "Welcome to our website!";
export let description = "Discover the best deals today!";
export let setPageState;
</script>


<br/>

<div class="border-2 border-white rounded-md bg-gray-700">
  
      <h1 class="text-4xl font-bold text-left bg-gray-800 
      m-4 p-5  inline-block rounded-lg
      border-2 border-gray-600
      ">
        {title}
      </h1>

      <div class="flex justify-center">
            <p class="text-1xl  bg-gray-800 w-4/5 leading-10 
            m-3 p-3   rounded-lg mx-auto inline-block">
                {description}
            </p>
      </div>

<div class="flex justify-center gap-4 ">

    <button class="bg-gray-300 text-white m-3 p-3 rounded-lg"
    on:click={ ()=> goto('/') }>
    Home
    </button>

    <button class="bg-green-500 text-white m-3 p-3 rounded-lg"
    on:click={ ()=>setPageState("showQuiz") }>
    Quiz
    </button>

</div>


</div>
