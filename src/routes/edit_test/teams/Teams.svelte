<script>
import Th from "$lib/cmp/Th.svelte";
import { fade } from 'svelte/transition';
import { classStore } from '../../appStore';
import SelectedCard from "./SelectedCard.svelte";
    import AvalableCards from "./AvalableCards.svelte";
export let test;

  let classes = [...$classStore];

 let remaining = [];

  $: {
    remaining = classes.filter((classObj) => !test.members.includes(classObj._id));
  }

  function selectTeam(id) {
    if (test.members.includes(id)) {
      test.members = test.members.filter((memberId) => memberId !== id);
    } else {
      test.members = [...test.members, id];
    }
  }
  function deSelectTeam(id) {
    test.members = test.members.filter( memberId => memberId !== id);
  }

  async function getClassName(id){
  debugger;
  const item = await $classStore.find(item => item._id === id);
  return item.name;
  }

  function resetTeams() {
    test.members = [];
  }
</script>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
  <Th title={"Select Class"} icon={"🧑‍🤝‍🧑"}>
    <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} class="border-2 border-gray-500 p-1 m-0 mt-0">

<SelectedCard {test} {deSelectTeam} members={test.members}/>

<AvalableCards {test} {selectTeam}  {remaining}  />

</div>

</Th>
</div>


