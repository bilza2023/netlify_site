<script>
import AreYouSure from "$lib/cmp/AreYouSure.svelte";
import MemberRow from "./MemberRow.svelte";
export let members;
export let deleteFn;
let editable = false;

const saveEmail = (index,email) =>{

editable = false;
}

</script>

{#each members as member,index }   
<tr class="text-white bg-gray-900 border-2 border-gray-200">
    <MemberRow {member}{index} {deleteFn} />
</tr>
{/each}



<style>
*{
padding:0;
margin:0;
}

</style>