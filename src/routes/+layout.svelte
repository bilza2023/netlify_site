<script>
import { onMount } from 'svelte';
import NavMain from '$lib/containers/nav/NavMain.svelte';
import NavMainMobile from '$lib/containers/nav/NavMainMobile.svelte';
import Footer from '$lib/cmp/Footer.svelte';
// import Underconstruction from '$lib/cmp/Underconstruction.svelte';
import './styles.css';
import { SvelteToast } from '@zerodevx/svelte-toast'

let isLogin;

 onMount(async ()=>{
try {
    const token = await localStorage.getItem("token");
        if (token == null || token.length == 0) {
            isLogin = false;
        }else {
            isLogin = true;
        }
  } catch (error) {
    console.error(error);
  }
});

</script>
<SvelteToast />

<NavMain isLogin={isLogin}/>
<!-- <NavMainMobile isLogin={isLogin}/> -->

<div class="app bg-gray-800 text-white m-0 py-0 px-6 ">
<!-- <Underconstruction /> -->
<br/>
		<slot isLogin={isLogin}/>
		 
</div>

<Footer />

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

</style>
