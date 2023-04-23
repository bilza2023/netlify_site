<script>
import AreYouSure from "$lib/cmp/AreYouSure.svelte";
import MemberRow from "./MemberRow.svelte";
import { members, dirty } from "./store.js";

export let deleteFn; 
let editable = false;

const saveEmail = () =>{

editable = false;
}

</script>

 <table class="w-full border-collapse table-responsive border-white">
    <thead class="">
    <tr class="bg-gray-900 text-white border-2 border-gray-200">
        <td class="border text-center">Ser</td>
        <td class="border text-center">Email</td>
        <td class="border text-center">Password</td>
        <td class="border text-center">Edit</td>
        <td class="border text-center">Delete</td>
    </tr>
    </thead> 
    <tbody>
{#each $members as member,index }   
<tr class="text-white bg-gray-900 border-2 border-gray-200">
    <MemberRow {member}{index} {deleteFn} {dirty} />
</tr>
{/each}
</tbody>
</table>


<style>
*{
padding:0;
margin:0;
}

</style>