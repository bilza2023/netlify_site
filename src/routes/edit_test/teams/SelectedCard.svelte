<script>

export let members;
export let deSelectTeam;
import {classStore} from "../../appStore";

 function getName(id){
const item =  $classStore.find((item) => item._id === id);
return item.name;
}
</script>


<div class="flex justify-center w-full p-1 m-1 ">
<h1 class="rounded-md bg-orange-800 p-1 m-1">Assign Test To Classes </h1>
</div>

<div class="flex flex-col w-full  justify-center">
{#each members as member }
    <div class="flex w-full justify-center ">
        <div class="w-10/12 p-1 m-1 text-center border-gray-500   bg-green-900  border-b-2">{getName(member)}</div>
        <button on:click={()=>deSelectTeam(member)}
        class="border-2 border-gray-500 rounded-md p-1 m-1">
            <span>🗑️</span>
        </button>
    </div>
{/each}
</div>

