<script>
import { goto } from '$app/navigation';
// import {is_login} from "$lib/stores/appStore.js";
import { toast } from '@zerodevx/svelte-toast';
import validateEmail from "$lib/js/validateEmail.js";
import Footer from "$lib/cmp/Footer.svelte";
import validateString from "$lib/js/validateString.js";
import LoadBtn from '$lib/cmp/LoadBtn.svelte';
import NavLogin from "$lib/cmp/NavLogin.svelte";
import { BASE_URL } from '$lib/js/config.js';
import ajaxPost from "$lib/js/ajaxPost.js";

let email ="";
let password =""; 

let isLoading = false;

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
  
const response = await ajaxPost( `${BASE_URL}/login` , {email,password});

    if (response.ok) {
    // debugger;
        const data = await response.json();
        console.log("data",data);
        localStorage.setItem("token", data.token);
        isLoading = true; //--set true for this page-load
        goto("/");
  } else {
    isLoading = false;
    const data = await response.json();
    toast.push(data.msg);
  } 
  }
</script>

<NavLogin />
<div class="bg-gray-800 text-white m-0 py-0 px-6 min-h-screen">
<br>
<br>
<form id="my-form" class="flex flex-col text-center w-3/5 sm:w-4/5 mx-auto bg-gray-600 rounded-md p-2">
  <h1 class="text-white text-2xl font-bold mb-4">Login</h1>
  <label class="mb-2">
    <span class="text-white">Email:</span>
    <input type="email" name="email" required class="block rounded-md py-2 px-3 mt-1 bg-gray-700 text-white w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto" bind:value={email}>
    
  </label>
  <label class="mb-4">
    <span class="text-white">Password:</span>
   
    <input type="password" name="password" required class="block  rounded-md py-2 px-3 mt-1 bg-gray-700 text-white w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto" bind:value={password}>
   
  </label>
  <LoadBtn {isLoading} eventHandler={handleSubmit} class="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto" />


</form>


<br>
</div>

<Footer />