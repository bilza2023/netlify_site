In my sveltekit app i am getting this error
<Page> was created without expected prop 'isLogin'


Where as I an sending in isLogin from the +layout.svelte to the page in slot.

here is +layout.svelte
<script>
// import {is_login} from "$lib/stores/appStore.js";
// let isLogin =false;
// is_login.subscribe( (p)=> isLogin=p);

import { SvelteToast } from '@zerodevx/svelte-toast'
import './styles.css';
import { BASE_URL } from '$lib/js/config.js';
import { onMount } from 'svelte';
let isLogin=false;
onMount(async ()=>{

  try {
      const token = await localStorage.getItem("token");
      // debugger;
          if (token == null || token.length == 0) {
              isLogin = false;
          }else {
              isLogin = true;
          }
    } catch (error) {
      // console.error(error);
    }
// console.log("isLogin" , isLogin);    
});



</script>
<SvelteToast />

<slot isLogin={isLogin}></slot>

and here is page.svelte
<script>
import Nav from '$lib/nav/Nav.svelte'; 
import Footer from '$lib/cmp/Footer.svelte';
import Underconstruction from "$lib/cmp/Underconstruction.svelte";
import ThreeCards from "$lib/cmp/ThreeCards.svelte";
import  generateRandomGradient  from "$lib/js/gradiant_dark.js";

export let isLogin;

const quizzes = [
    { _id : "64234b9db5d31dab8acf14bb" , title : "World Geography Facts"},
    { _id : "6424bc4cc51d2f76484c3ff7" , title : "World War II Facts"},
    { _id : "6424018be683525d966ea647" , title : "Our Solar System"},
    { _id : "6424018be683525d966ea649" , title : "Global Economy 101"},
    { _id : "64234b9db5d31dab8acf14bc" , title : "Everyday Science"}

];
//...
const skrink = (txt)=>{
  if (txt.length <= 25) {
    return txt;
  } else {
    return txt.slice(0, 22) + "...";
  }    
}
 
</script>

<Nav {isLogin}/>
<div class="bg-gray-800 text-white m-0 py-0 px-6 ">
<!-- <Underconstruction /> -->
<br/>

<Underconstruction  />
<br/>

<ThreeCards />

<br>
<h1 class="p-2 m-2 bg-gray-900 text-center text-2xl rounded-lg border border-gray-500">Try Quiz Tests</h1>
<br>

<div class="flex flex-wrap  justify-center gap-2">

{#each quizzes as item}
<a href={`/quiz/show?quizId=${item._id}`} 
  class="flex-shrink-0   w-full md:w-1/2 lg:w-1/5  ">

<div class=" rounded-lg cursor-pointer border-2 border-white text-center">
      
<div style={`min-height:100px; background-image: ${generateRandomGradient()}`} class="flex items-center rounded-md justify-center">
<p class=" overflow-hidden overflow-ellipsis">{skrink(item.title)}</p>

</div>
</div>
</a>

{/each}

</div>

<br>
<br>
<br>
<br> 
</div><!--app-->


<Footer />

