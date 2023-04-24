<script>
import { storeMembers , storeDirty} from './store.js';
import MemTable from './MemTable.svelte';
import NewMember from './NewMember.svelte';
import Nav from '$lib/nav/Nav.svelte';
import { onMount,onDestroy } from 'svelte';
import { browser } from '$app/environment';
import { BASE_URL } from '$lib/js/config.js';
import Footer from '$lib/cmp/Footer.svelte';
import { toast } from "@zerodevx/svelte-toast";
  // Update the value of the store
  // storeMembers.set(['Alice', 'Bob', 'Charlie']);
  
let dirty;
storeDirty.subscribe(value => {dirty = value});
storeDirty.set(true);

let members;
storeMembers.subscribe(value => {members = value;});
function membersDown(members) {
    return members.map(member => {
        const { clean, ...rest } = member;
        return rest;
    });
}
function membersUp(members) {
    return members.map(member => ({...member, clean: true}));
}

function handleBeforeUnload(event) {
  if ( get(dirty) ) {
    event.preventDefault();
    event.returnValue = '';
  }
}
let isLogin=true;

onMount(async () => {
  const token = await localStorage.getItem("token");
      // debugger;
          if (token == null || token.length == 0) {
              isLogin = false;
          }else {
              isLogin = true;
            const resp = await fetch( `${BASE_URL}/user/members` ,{
            method: 'GET',
            headers: {
              // 'Authorization': `Bearer ${token}`,
              'Authorization': `${token}`
            }
            });

            const data = await resp.json();
            // console.log(data);
            const incomming_mem = data.members.members;
            const memUp = membersUp(incomming_mem); 
            storeMembers.set(memUp);
            console.log("members" , members);
          }
  
}); 

const saveAll = async ()=>{ 
 const memToSave = membersDown(members);
 // console.log("memToSave" , memToSave);
 // return;
  const token = localStorage.getItem('token');
  // debugger;
  // const mm = get(members);
  const response = await fetch( `${BASE_URL}/user/members/save` , {
    method: 'POST',
    body: JSON.stringify( {members:memToSave ,token} ),
    headers: { 'Content-Type': 'application/json' }
  });
      // debugger;
      if ( response.ok ){
      const data = await response.json();
          const membersUpArray = membersUp(data.members.members);
         storeMembers.set(membersUpArray);
      // membersStore.update(() => ({ ...data.members }));
        // console.log("members" , members);
        toast.push('saved'); 
      }else {
      const data = await response.json();
      // storeDirty.set(false);
      toast.push( data.message );
      }


}  

onDestroy(() => {
  if (browser){
  window.removeEventListener('beforeunload', handleBeforeUnload);
  }
});

if (browser){
 window.addEventListener('beforeunload', handleBeforeUnload);
}

</script>


<div class="p-0 m-0 width-full   bg-gray-800 text-white min-h-screen">

<Nav {isLogin}/>
<br>
<h1 class="w-full text-white  text-2xl underline text-center">Add New Member</h1>
<br>
<NewMember {saveAll} />
<br>

<h1 class="w-full text-white  text-2xl underline text-center">All Members</h1>
<br>

<div class="flex justify-center">
<div class="w-8/12 p-2 m-2 bg-gray-300 rounded-lg text-center">  
<button class="w-11/12 
{dirty ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700" }
  active:bg-green-900 text-white rounded-md p-1 m-1"
  on:click={saveAll}>Save All</button> 
</div>
</div>
<br />


<MemTable />

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>




</div>

<Footer />
