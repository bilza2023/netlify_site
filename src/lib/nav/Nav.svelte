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

  <div class="container mx-auto px-6 py-1 md:flex md:justify-between md:items-center bg-gray-700 shadow-lg">

  <!--left div first inner flex box-->
    <div class="flex justify-between items-center">
      
<div class="w-15">
  <a href="/">
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900">
      <span class="text-md">&#x1F3E0;</span>
      <span class="text-xs font-medium text-white">Skillzaa.com</span>
    </button>
  </a>
</div>




</div><!--left div-->



  <!--right div left inner flex box-->
    <div class="flex justify-between items-center gap-2">

{#if isLogin}
 
<div class="w-15">
    <a href="/create" >
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900">
      <span class="text-xs">&#x270F;</span>
      <span class="text-xs font-medium text-white">Create</span>
    </button>
    </a>
  </div>


<div class="w-15">
  <a href="/dashboard">
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900">
      <span class="text-xs">&#x1F5A5;</span>
      <!-- <span class="text-xs">&#x1F4FA;</span> -->
      <span class="text-xs font-medium text-white">DashBoard</span>
    </button>
  </a>
</div>

<div class="w-15">
  <a href="/members">
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900">
      <span class="text-xs">&#x1F46C;</span>
      <span class="text-xs font-medium text-white">Members</span>
    </button>
  </a>
</div>

<div class="w-15">
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900"
    on:click={logoutFn}>
      <span class="text-xs">&#x27A1;</span>
      <span class="text-xs font-medium text-white">Logout</span>
    </button>
</div>

{:else}
<div class="w-15">
  <a href="/register">
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900">
      <span class="text-xs">&#x1F4C2;</span>
      <span class="text-xs font-medium text-white">Register</span>
    </button>
  </a>
</div>

<div class="w-15">
  <a href="/login">
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900">
      <span class="text-xs">&#x1F511;</span>
      <span class="text-xs font-medium text-white">Login</span>
    </button>
  </a>
</div>


{/if}




</div><!--right flex-->



</div><!--outer most div-->
