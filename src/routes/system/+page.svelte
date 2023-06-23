<script>

import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';  
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import Card from './Card.svelte';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import { onMount } from 'svelte';



////////////-store variables--///////


onMount(async ()=>{

  try {


    } catch (error) {
      // console.error(error);
    }
});
</script>

<Nav/>


<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">

<HdgWithIcon title="System" , icon ="🔧"/>

<div class="flex gap-2 flex-wrap justify-center"><!--flex div start-->

<Card title="Dashboard" icon='📺' urlTag="theme"/>
<Card title="New Admission" icon='🗃️' urlTag="admissions"/>
<Card title="New Class" icon='🎓' urlTag="manageClasses"/>

<Card title="Students" icon='👨‍🎓' urlTag="students"/>
<Card title="Classes" icon='🧑‍🤝‍🧑' urlTag="classes"/>
<Card title="Tags" icon='🏷️' urlTag="tags"/>


<Card title="Templates" icon='📜' urlTag="templates"/>
<Card title="Tests" icon='🧪' urlTag="tests"/>
<Card title="Running" icon='🏃‍♂️' urlTag="running"/>



<Card title="Theme" icon='🎨' urlTag="theme"/>
<Card title="App Settings" icon='📐' urlTag="appSettings"/>
<Card title="Messages" icon='📨' urlTag="messages"/>
<Card title="Emails" icon='📧'  urlTag="emails"/>
<Card title="Notes" icon='📋'  urlTag="emails"/>
<Card title="Broadcasts" icon='📢'  urlTag="emails"/>
</div><!--flex divend-->
</div><!--wrapper-->
<Footer />
