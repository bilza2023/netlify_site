<script>
import { goto } from '$app/navigation';
import {is_login} from "$lib/stores/appStore.js";
 import { toast } from '@zerodevx/svelte-toast';


import LoadBtn from '$lib/cmp/LoadBtn.svelte';
let isLoading = false;

/////////////
async function handleSubmit(event) {
isLoading = true;
// return;
  event.preventDefault();
  // const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const data = { email, password };

  // const response = await fetch('http://localhost/user/login', {
  const response = await fetch('https://skillzaa.cyclic.app/user/login', {
    method: 'POST',
    body: JSON.stringify(data),
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

<button on:click={() => toast.push('Some Damn Error!',{
 theme: {
    '--toastBackground': 'red',
    '--toastColor': 'white'
  }

})}>SHOW TOAST</button>

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
<form class="w-3/5 sm:w-4/5 mx-auto bg-gray-600 rounded-md">
  <label>
    Email:
    <input type="email" name="email" required value="">
  </label>
  <label>
    Password:
    <input type="password" name="password" required value="">
  </label>
  
<LoadBtn {isLoading} eventHandler={handleSubmit} />
  
</form>
