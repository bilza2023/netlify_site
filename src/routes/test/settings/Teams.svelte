<script>
import DispatchBlock from "./DispatchBlock.svelte";
import Th from "$lib/cmp/Th.svelte";
import FormRow from "../FormRow.svelte";
import { fade } from 'svelte/transition';

import { quizStore , membersStore } from '../store';
let quiz;
let members;
quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = value);


// let visible = true;

  // function toggleVisibility() {
  //   visible = !visible;
  // }


</script>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>

<Th title={"Add Students"} icon={"🧑‍🤝‍🧑"}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >

 

  
<FormRow title="Users"  >
<DispatchBlock  />
</FormRow>




</div>


</Th>

</div>