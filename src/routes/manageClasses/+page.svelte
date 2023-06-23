<script>

import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';  
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import { onMount } from 'svelte';
import BtnWIcon from "$lib/cmp/BtnWIcon.svelte";
import Form from "$lib/form/Form.svelte";
import FormRow from "$lib/form/FormRow.svelte";
import ajaxPost from "$lib/js/ajaxPost.js";

onMount(async ()=>{

  try {


    } catch (error) {
      // console.error(error);
    }
});

let classObj = {
      name : "",
      description : ""
}
async function save(){
  // try {
  // debugger;
  // student.id = uuid();
      const resp = await ajaxPost(`${BASE_URL}/class/save`,{classObj});
            // debugger;
                if (resp.ok == true) {
                const data = await resp.json();
                classObj.name = '';
                classObj.description = '';
                      toast.push("Class saved");
                }else {
                      toast.push("failed to save");
                }  
//     } catch (error) {
//         toast.push("failed to save");
//     }
}
</script>

<Nav/>


<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">

<HdgWithIcon title="Manage Classes" , icon ="🎓"/>

<br>

<Form title="Add New Class" visible={true} icon={'✏️'}>

<FormRow title="Class Name">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={classObj.name}>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">Class name must be unique, two classes can not have the same name.You can use numbers and text.</div>
</FormRow>

<FormRow title="Details">
<textarea class="w-full bg-gray-700 color-white" 
bind:value={classObj.description} />
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">Add some description for the class.</div>
</FormRow>

</Form>

<br>

<BtnWIcon title="Save New Class" icon='💾' fn={save} />
<br>

<br>
<br>
<br>
<br>
<br>
</div><!--wrapper-->
<Footer />
