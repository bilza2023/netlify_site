<script>
import { goto } from '$app/navigation';
import {is_login} from "$lib/stores/appStore.js";
 import { toast } from '@zerodevx/svelte-toast';
import validateEmail from "$lib/js/validateEmail.js";
import validateString from "$lib/js/validateString.js";

let email ="";
let emailErrors = [];
let password ="";

import LoadBtn from '$lib/cmp/LoadBtn.svelte';
let isLoading = false;

/////////////
async function handleSubmit(event) {
  event.preventDefault();
const emailError = validateEmail(email);
    if (emailError.status !== "ok"){
          toast.push('Not a valid email',{
      theme: {
          '--toastBackground': 'brown',
          '--toastColor': 'white'
        }
      });  
      return;
    }
const passwordError = validateString(password,6,30);
    if (passwordError.status !== "ok"){
          toast.push('Not a valid password',{
      theme: {
          '--toastBackground': 'brown',
          '--toastColor': 'white'
        }
      });  
      return;
    }


isLoading = true;
  
  // const response = await fetch('http://localhost/user/login', {
  const response = await fetch('https://skillzaa.cyclic.app/user/login', {
    method: 'POST',
    body: JSON.stringify( {email,password} ),
    headers: {
      'Content-Type': 'application/json'
    }
  });
      const RespData = await response.json();
      localStorage.setItem('token', RespData.token);
      is_login.set(true);
      goto('/');
  }
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  input[type="text"], input[type="email"], input[type="password"] {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    width: 100%;
    color:black;
    max-width: 20rem;
  }
  button[type="submit"] {
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
</style>

<br>
<form id="my-form" class="w-3/5 sm:w-4/5 mx-auto bg-gray-600 rounded-md">
<h1 class=" p-2 text-3xl mt-2">Login</h1>
  <label>
    Email:
    <input type="email" name="email" required  bind:value={email}>
    <p class="text-sm mt-1 p-1 bg-gray-700 rounded-md">Please provide a working and valid email</p>
  </label>
  <label>
    Password:
    <input type="password" name="password"  required bind:value={password}>
    <p class="text-sm mt-1 p-1 bg-gray-700 rounded-md">Min 6 chars </p>
  </label>
  
<LoadBtn {isLoading} eventHandler={handleSubmit} />
  
</form>
