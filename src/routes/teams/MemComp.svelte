<script>
  import { storeMembers } from './store.js';

  // Use the value of the store
  let members;
  storeMembers.subscribe(value => {
    members = value;
  });

const reset = async ()=>{
storeMembers.set(['Ali', 'Jamal', 'Tariq']);
}  
const addMember = async (member)=>{
  storeMembers.update(members => [...members, member]);
}
</script>

<ul>
  {#each members as member}
    <li>{member}</li>
  {/each}
</ul>

<button on:click|preventDefault={reset} class="bg-red-900 text-white">
Change</button>

<button on:click|preventDefault={()=>addMember("Jill")} class="bg-red-900 text-white">
addMember</button>