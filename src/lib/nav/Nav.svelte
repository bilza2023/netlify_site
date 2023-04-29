<script>
import Card from "./Card.svelte";
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import Logo from "./Logo.svelte";
import IfLoginMobile from "./IfLoginMobile/IfLoginMobile.svelte";
import IfLogin from "./IfLogin.svelte";
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

<Logo />
  
  <!--right div left inner flex box-->
    <div class="flex justify-between items-center gap-2">

{#if isLogin}

<div class="largeScreen">
  <IfLogin {logoutFn} />
</div>

<!-- LoginMobile component -->
<div class="smallScreen">
  <IfLoginMobile  {logoutFn}/>
</div>

{:else}
<Card url={'/register'} icon=&#x1F4C2; title="Register" />
<Card url={'/login'} icon=&#x1F511; title="Login" />
{/if}

</div><!--right flex-->



</div><!--outer most div-->


<style>
  .smallScreen {
    display: none;
  }

  .largeScreen {
    display: block;
  }

  @media (max-width: 480px) {
    .smallScreen {
      display: block;
    }

    .largeScreen {
      display: none;
    }
  }
</style>
