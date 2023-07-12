<script>
import { emailStore , passwordStore } from '../store';

let email ="";
let password ="";

emailStore.subscribe(value => email = value);
passwordStore.subscribe(value => password = value);

const handleEmailInput = (event) => {
    emailStore.set(event.target.value);
}

const handlePasswordInput = (event) => {
    passwordStore.set(event.target.value);
}

// let quiz;

</script>

<div class="flex justify-center w-full">
<div class="flex flex-col md:flex-row justify-center bg-gray-800 border border-gray-500 p-2 m-1 rounded-md w-full">
  <!-- <div class="flex flex-col md:flex-row bg-gray-800 border border-gray-500 p-2 m-1 rounded-md w-full"> -->
    <div class="flex flex-col items-center">
      <label for="" class="p-1 m-1">Email</label>
      <input class="bg-gray-600 text-white rounded-md m-1 p-1 border border-white" type="text" bind:value={email} on:input|preventDefault={handleEmailInput}>
    </div>
    <div class="flex flex-col items-center">
      <label for="" class="p-1 m-1">Password</label>
      <input class="bg-gray-600 text-white rounded-md m-1 p-1 border border-white" type="text" bind:value={password} on:input|preventDefault={handlePasswordInput}>
    </div>
  </div>
</div>