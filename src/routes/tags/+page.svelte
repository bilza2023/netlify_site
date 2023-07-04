<script>

import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';  
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import { onMount } from 'svelte';
import BtnWIcon from "$lib/cmp/BtnWIcon.svelte";
import EditTable from "./EditTable.svelte";
import Form from "$lib/form/Form.svelte";
import FormRow from "$lib/form/FormRow.svelte";
import ajaxPost from "$lib/js/ajaxPost.js";

let name = "";
let description = "";


async function save(){
  debugger;
      const resp = await ajaxPost(`${BASE_URL}/tag/create`,{data:{name ,
      description}});

                if (resp.ok == true) {
                const data = await resp.json();
                  name = '';
                  description = '';
                      // toast.push("Tag saved");
                }else {
                const data = await resp.json(); //--for debug  
                console.log(data);
            //           toast.push(data.message);//--for debug
                      // toast.push("failed to save");
                }  
//     } catch (error) {
//         toast.push("failed to save");
//     }
}
onMount(async ()=>{

  try {


    } catch (error) {
      // console.error(error);
    }
});
</script>

<Nav/>


<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">

<HdgWithIcon title="Tags" , icon ="🏷️"/>

<br>

<Form title="New Tags" visible={true} icon={'✏️'}>
<FormRow title="Tag Name">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={name} >
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">Tag name must be unique, two tags can not have the same name. You can use numbers and text. The Tags are available throught out the app.</div>
</FormRow>

<FormRow title="Description">
<textarea class="w-full bg-gray-700 color-white" bind:value={description}/>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">Add some description for the tag.</div>
</FormRow>

</Form>

<br>

<BtnWIcon title="Save New Tag" icon='💾' fn={save} />

<br>
<hr>

<HdgWithIcon title="Edit Tags" , icon ="🏷️" />
<br>
<br>
<EditTable />
<br>
<br>
<br>
<br>
<br>
</div><!--wrapper-->
<Footer />
