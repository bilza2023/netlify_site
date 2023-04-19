<script>
import Card from "./Card.svelte";
// let isLogin =false;
// is_login.subscribe( (p)=> isLogin=p);
export let isLogin;
//--only place to logout
const logoutFn = ()=>{
localStorage.setItem('token',"");
isLogin = false ;
}
</script>

  <div class="flex  justify-between items-center bg-gray-700 px-2  ">

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

<Card url={'/create'} icon=&#x270F; title="Create" />

<Card url={'/dashboard'} icon=&#x1F5A5; title="DashBoard" />

<Card url={'/members'} icon=&#x1F46C; title="Members" />



<div class="w-15">
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900"
    on:click={logoutFn}>
      <span class="text-xs">&#x27A1;</span>
      <span class="text-xs font-medium text-white">Logout</span>
    </button>
</div>

{:else}
<Card url={'/register'} icon=&#x1F4C2; title="Register" />
<Card url={'/login'} icon=&#x1F511; title="Login" />
{/if}

</div><!--right flex-->



</div><!--outer most div-->
