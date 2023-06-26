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
import studentsTest from "./testone/studentsTest";
import testTest from "./testone/testTest";
// import surveyTest from "./testone/testSurvey";
import { onMount } from 'svelte';

import AgentAjax from "./AgentAjax/AgentAjax";
const agentAjax = new AgentAjax('student');
agentAjax.sendDataObjInResponse = true;

let entriesArray = [];
onMount(async ()=>{
  try {
    // await baseTemplateTest(false);
    // await surveyTest("The name");
    // await testTest();
    
    // await tagsTest("The name" , "dd dd dd");
    // await classesTest("The name" , "dd dd dd");
    // await studentsTest("345434" , "Agent Ajax");

    // const readResult = await agentAjax.read();
    // if (readResult.message == null){
    //       console.log("read",readResult.payload.items)
    // }else {
    //   console.log(readResult.message);
    // }
    




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