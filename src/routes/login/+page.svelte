<script>
import { goto } from '$app/navigation';
import {is_login} from "$lib/stores/appStore.js";
 import { toast } from '@zerodevx/svelte-toast';
import validateEmail from "$lib/js/validateEmail.js";
import validateString from "$lib/js/validateString.js";

let email ="";
let password ="";

import LoadBtn from '$lib/cmp/LoadBtn.svelte';
let isLoading = false;

/////////////
async function handleSubmit(event) {

event.preventDefault();

const emailError = validateEmail(email);
    if (emailError.status !== "ok"){
          toast.push('Not a valid email');  
      return;
    }

const passwordError = validateString(password,6,30);
    if (passwordError.status !== "ok"){
          toast.push('Not a valid password');  
      return;
    }

isLoading = true;
  
const response = await fetch('https://skillzaa.cyclic.app/user/login', {
// const response = await fetch('http://localhost/user/login', {
    method: 'POST',
    body: JSON.stringify( {email,password} ),
    headers: {
      'Content-Type': 'application/json'
    }
});
      const data = await response.json();
      if (data.status == "ok"){
      localStorage.setItem('token', data.token);
      is_login.set(true);
      goto('/');
      }else {
        isLoading = false;
            toast.push( data.msg );

      }
  }
</script>
<br>
<form id="my-form" class="flex flex-col text-center w-3/5 sm:w-4/5 mx-auto bg-gray-600 rounded-md p-2">
  <h1 class="text-white text-2xl font-bold mb-4">Login</h1>
  <label class="mb-2">
    <span class="text-white">Email:</span>
    <input type="email" name="email" required class="block rounded-md py-2 px-3 mt-1 bg-gray-700 text-white w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto" bind:value={email}>
    <p class="text-xs mt-1 p-1 bg-gray-500 rounded-md text-white w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto">Please provide a working and valid email</p>
  </label>
  <label class="mb-4">
    <span class="text-white">Password:</span>
   
    <input type="password" name="password" required class="block  rounded-md py-2 px-3 mt-1 bg-gray-700 text-white w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto" bind:value={password}>
   
    <p class="text-xs mt-1 p-1 bg-gray-500 rounded-md text-white w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto">Min 6 chars </p>
  </label>
  <LoadBtn {isLoading} eventHandler={handleSubmit} class="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto" />
</form>
