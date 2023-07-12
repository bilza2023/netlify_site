check this Team.svelte
i want to create a reactive variable "remaining"

this is all the class objects from classes which are not present in test.members. please make sure the remainng  {} has the desired code

<script>
  import Th from "$lib/cmp/Th.svelte";
  import { fade } from 'svelte/transition';
  import { classStore } from '../appStore';
  
  export let test;

  let classes = [...$classStore];

 $: remaining =  {
    //---code here
 }
  function selectTeam(id) {
    if (test.members.includes(id)) {
      test.members = test.members.filter((memberId) => memberId !== id);
    } else {
      test.members = [...test.members, id];
    }
  }

  function resetTeams() {
    test.members = [];
  }
</script>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
  <Th title={"Select Class"} icon={"🧑‍🤝‍🧑"}>
    <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} class="border-2 border-gray-500 p-1 m-0 mt-0">

<div class="flex flex-col">
{#each test.members as member }
    <h1 class="p-1 m-1 border-gray-300 border-2 bg-green-900">{member}</h1>
{/each}
</div>

<br class="bg-red-900 p-1m-1"/>


<div class="flex flex-col">
{#each classes as classobj }
    <button on:click={()=>selectTeam(classobj._id)}>
    <h1 class="p-1 m-1 border-gray-300 border-2 bg-gray-900">{classobj._id}</h1>
    </button>
{/each}
</div>



  </Th>
</div>
