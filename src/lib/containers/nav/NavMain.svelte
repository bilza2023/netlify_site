<script>
  let isVisible = false;

import {is_login} from "$lib/stores/appStore.js";
let isLogin =false;
is_login.subscribe( (p)=> isLogin=p);

const logoutFn = ()=>{
localStorage.setItem('token',"");
is_login.set(false);
}
</script>

<nav class="bg-gray-700 shadow-lg ">

    <div class="flex justify-between  ">
      
      <div>
        <a class="text-xl font-bold text-white" href="/">skillzaa.com</a>
        <span class="text-xs  text-white">(Beta)</span>
      </div>
      
      <div class="flex justify-end">
        {#if isLogin}
          <div><a class="text-white hover:text-gray-300 py-2 px-4" href="/dashboard">Create</a></div>
            <div>
            <a class="text-white hover:text-gray-300 py-2 px-4" href="#"
            on:click={logoutFn} >Logout</a>
            </div>
          {:else}
            <div><a class="text-white hover:text-gray-300 py-2 px-4" href="/register">Register</a></div>
            <div><a class="text-white hover:text-gray-300 py-2 px-4" href="/login">Login</a>
            </div>
          {/if}
        </div>
   <div><!--main flex box---->

</nav>
