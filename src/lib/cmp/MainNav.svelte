<script>
  let isVisible = false;

import {is_login} from "$lib/stores/appStore.js";
import NavDropDown from "$lib/cmp/NavDropDown.svelte";
import cog from "$lib/svg/cog.svg";
let isLogin =false;
is_login.subscribe( (p)=> isLogin=p);

const logoutFn = ()=>{
localStorage.setItem('token',"");
is_login.set(false);
}
</script>

<nav class="bg-gray-700 shadow-lg">
  <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div class="flex justify-between items-center">
      <div>
        <a class="text-xl font-bold text-white" href="/">skillzaa.com</a>
        <span class="text-xs text-white">(Underconstruction)</span>
      </div>
      <div class="md:hidden">
        <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none" on:click={() => isVisible = !isVisible }>
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if={!isVisible} fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"></path>
            <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="hidden md:flex md:items-center md:w-auto">
      <nav>
        <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
        
          {#if isLogin}
 
          <NavDropDown />

            <li><a class="text-white hover:text-gray-300 py-2 px-4" href="#"
            on:click={logoutFn} >Logout</a></li>
          
          {:else}
            <li><a class="text-white hover:text-gray-300 py-2 px-4" href="/register">Register</a></li>
            <li><a class="text-white hover:text-gray-300 py-2 px-4" href="/login">Login</a></li>
          {/if}
          <!-- <li><a class="text-white hover:text-gray-300 py-2 px-4" href="/about">About</a></li> -->
        </ul>
      </nav>
    </div>
  </div>
  {#if isVisible}
    <div id="mobile-menu" class="">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a class="text-white hover:text-gray-300 py-2 block" href="/">Home</a>
        {#if isLogin}
        <li><a class="text-white hover:text-gray-300 py-2 px-4" href="/dashboard">Create</a></li>

          <!-- svelte-ignore a11y-missing-attribute -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <li><a class="text-white hover:text-gray-300 py-2 block"
          on:click={logoutFn}>Logout</a></li>
        {:else}
          <li><a class="text-white hover:text-gray-300 py-2 block" href="/register">Register</a></li>
        
          <li class="ml-4"><a class="text-white hover:text-gray-300 py-2 block" href="/login">Login</a></li>
        {/if}
      </div>
    </div>
  {/if}
</nav>
