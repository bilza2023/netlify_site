<script>
import Left from "./Left.svelte";
import Right from "./Right.svelte";
import Title from "./Title.svelte";
export let run;

</script>
<div class="flex w-full bg-gray-600 rounded-md p-2 m-1 
border-4 max-h-32text-center">

    <div class="w-1/5 ">
            <Left quiz={run}/>
    </div>
    <div class="flex-1  border-separate border-2 border-gray-500 
        rounded-md p-1 bg-gray-800 h-full">
        
        <Title quiz={run} />
        <Right quiz={run}/>
    </div>
</div>
