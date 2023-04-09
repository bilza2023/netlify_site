<script>
import {is_login} from "$lib/stores/appStore.js";

let isVisible = false;
let isLogin =false;

is_login.subscribe( (p)=> isLogin=p);

const logoutFn = ()=>{
localStorage.setItem('token',"");
is_login.set(false);
}
</script>


<div class="flex bg-gray-700 shadow-lg justify-between  p-2    ">

    <div class="" >
      <a class="text-xl font-bold text-white" href="/">skillzaa.com</a>
        <span class="text-xs  text-white">(Beta)</span>
    </div>

    <div class="" >
       {#if isLogin}
          <div>
          <a class="text-white hover:text-gray-300 py-2 px-4" href="/dashboard">Dashboard</a>
          <a class="text-white hover:text-gray-300 py-2 px-4" href="/members">Members</a>
          
          <a class="text-white hover:text-gray-300 py-2 px-4" href="#"
            on:click={logoutFn} >Logout</a>  
          </div>

          {:else}
            <div>
            <a class="text-white hover:text-gray-300 py-2 px-4" href="/register">Register</a>
            <a class="text-white hover:text-gray-300 py-2 px-4" href="/login">Login</a>
            </div>
          {/if}
    </div>


</div>