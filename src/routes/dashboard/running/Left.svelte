<script>
import Counter from "./Counter.svelte";
export let quiz;
</script>  
  
<div class="text-4xl border-separate border-2 border-gray-500 rounded-md p-1 bg-green-900 h-full flex flex-col justify-center items-center pb-0 mb-0">

    <div class="animate-spin-slow inline-block mb-2">       
    ⚙️
    </div>
      <div>
        <Counter createdAt={quiz.createdAt}/>
        </div>
</div>

      




<style>
  .animate-spin-slow {
        animation: spin 3s linear infinite;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
</style>
