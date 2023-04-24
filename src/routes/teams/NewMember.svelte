<script>
import { toast } from '@zerodevx/svelte-toast';
import validateEmail from "$lib/js/validateEmail.js";
import validateString from "$lib/js/validateString.js";
import { storeMembers} from './store.js';
let members;
storeMembers.subscribe(value => {members = value;});

let email = "";
let password = "";
// export let members;
export let saveAll;

const create = async (event) =>{
 event.preventDefault();
 const emailError = validateEmail(email);
    if (emailError.status !== "ok"){
          toast.push('Not a valid email');  
      return;
    }

 const passwordError = validateString(password,4,30);
    if (passwordError.status !== "ok"){
          toast.push('Not a valid password');  
      return;
    }
  //  members.update(arr => [...arr, { email, password }]);
  //--add clean
  storeMembers.update(arr => [{ email, password , clean:true }, ...arr]);
  email = "";
  password = "";
  await saveAll();
}

</script>

<div class="flex justify-center">
<div class="inline-block border-2 border-white p-2 m-2  text-center rounded-lg ">

<div class="flex justify-center">

<div class="flex flex-col">
      <h3 class=" text-center ml-2 underline">Member`s Email</h3>
    <input class=" bg-gray-700 text-white   m-1 rounded-lg"  type="email" bind:value={email} >
    <div class="text-xs">Provide a valid email address</div>
</div>


<div class="flex flex-col" >
      <h3 class=" text-center  ml-2 underline">Assign Password</h3>
    <input class=" bg-gray-700 text-white   m-1 rounded-lg"  type="text" bind:value={password} >
    <div class="text-xs">Min 5 char</div>
</div>


</div><!--outer most flex-->




<div class="flex justify-center " >

<button class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:from-green-700 active:to-green-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={create}><span class="text-xs">Add New Member</span></button>
</div>


</div><!--outer div for border-->
</div>