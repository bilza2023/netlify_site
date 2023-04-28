<script>
import Card from "./Card.svelte";
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import Logo from "./Logo.svelte";
import LoginMobile from "./LoginMobile.svelte";
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

<div class="xs:hidden md:block">
  <IfLogin {logoutFn} />
</div>

<!-- LoginMobile component -->
<div class="xs:block md:hidden">
  <LoginMobile />
</div>

{:else}
<Card url={'/register'} icon=&#x1F4C2; title="Register" />
<Card url={'/login'} icon=&#x1F511; title="Login" />
{/if}

</div><!--right flex-->



</div><!--outer most div-->
