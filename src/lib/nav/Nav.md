<script>
import NavDropDown from "./NavDropDown.svelte";
// let isLogin =false;
// is_login.subscribe( (p)=> isLogin=p);
export let isLogin;
//--only place to logout
const logoutFn = ()=>{
localStorage.setItem('token',"");
isLogin = false ;
}
</script>

  <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center bg-gray-700 shadow-lg">
    <div class="flex justify-between items-center">
      <div>
        <a class="text-xl font-bold text-white" href="/">skillzaa.com</a>
        <!-- <span class="text-xs text-white">(Underconstruction)</span> -->
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
  