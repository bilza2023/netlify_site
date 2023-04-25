<script>
import Card from "./Card.svelte";
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';

let isLogin;
//--only place to logout
const logoutFn = ()=>{
localStorage.setItem('token',"");
isLogin = false ;
}

onMount(async () => {
  try {
  const token =  localStorage.getItem("token");
      // debugger;
  if (token == null || token.length == 0) {
              isLogin = false;
  }else {
          isLogin = true;
  }
  } catch (error) {
    toast.push("Login error");
    console.error(error);
 }
});

</script>

  <div class="flex  justify-between items-center bg-gray-700 px-2  ">

  <!--left div first inner flex box-->
    <div class="flex justify-between items-center">



<div class="w-15">
  <a href="/">
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900">
      <span class="text-md">&#x1F3E0;</span>
      <span class="text-xs font-md text-white">Skillzaa.com</span>
    </button>
  </a>
</div>




</div><!--left div-->



  <!--right div left inner flex box-->
    <div class="flex justify-between items-center gap-2">

{#if isLogin}

<Card url={'/create'} icon=&#x1F4A1; title="Create" />

<Card url={'/dashboard'} icon=&#x1F5A5; title="DashBoard" />

<Card url={'/teams'} icon=&#x1F46C; title="Teams" />





<div class="w-15">
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900"
    on:click={logoutFn}>
      <span class="text-md">&#x1F6EB;</span>
      <span class="text-xs font-md text-white">Logout</span>
    </button>
</div>

<Card url={'/docs'} icon=&#x1F4D6; title="Help" />

{:else}
<Card url={'/register'} icon=&#x1F4C2; title="Register" />
<Card url={'/login'} icon=&#x1F511; title="Login" />
{/if}

</div><!--right flex-->



</div><!--outer most div-->
