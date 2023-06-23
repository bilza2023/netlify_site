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
>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">Tag name must be unique, two tags can not have the same name. You can use numbers and text. The Tags are available throught out the app.</div>
</FormRow>

<FormRow title="Description">
<textarea class="w-full bg-gray-700 color-white" />
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">Add some description for the tag.</div>
</FormRow>

</Form>

<br>

<HdgWithIcon title="Edit Tags" , icon ="🏷️"/>

<br>
<EditTable />
<br>
<BtnWIcon title="Save New Tag" icon='💾' fn={()=>console.log("kesa")} />
<br>
<br>
<br>
<br>
<br>
</div><!--wrapper-->
<Footer />
