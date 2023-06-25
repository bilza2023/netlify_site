<script>
import { BASE_URL } from '$lib/js/config.js';
import ajaxGet from "$lib/js/ajaxGet.js";
import ajaxPost from "$lib/js/ajaxPost.js";
import Entries from "./Entries.svelte";
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import { toast } from '@zerodevx/svelte-toast';
import baseTemplateTest from "./testone/baseTemplateTest.js";
import tagsTest from "./testone/tagsTest";
import classesTest from "./testone/classesTest";
import { onMount } from 'svelte';

let entriesArray = [];
onMount(async ()=>{
  try {
    // await baseTemplateTest();
    // await tagsTest("The name" , "dd dd dd");
    await classesTest("The name" , "dd dd dd");
    } catch (error) {
      console.error(error);
    }
});



</script>
<div class="bg-gray-800 w-full p-2 h-screen text-white text-center">
<HdgWithIcon title='Welcome To API Front end Test' icon='🕵️‍♀️📸'/>
<br>


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</div>