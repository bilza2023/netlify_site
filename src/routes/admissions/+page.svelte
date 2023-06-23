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

onMount(async ()=>{

  try {


    } catch (error) {
      // console.error(error);
    }
});
</script>

<Nav/>


<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">

<HdgWithIcon title="Add A Student" , icon ="🗃️"/>

<br>

<Form title="Basic Details" visible={true} icon={'✏️'}>
<FormRow title="Registeration Number">
<input type="number" class="w-full bg-gray-700 color-white"
>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">You can add any Numerical value as registeration number as long as it is a valid number and it is unique among all the students. No two students can have the same registeration number. No symbols, chracters are allowed just numbers.</div>
</FormRow>

<FormRow title="Name">
<input type="text" class="w-full bg-gray-700 color-white"
>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">This canbe edited later.</div>
</FormRow>

</Form>

<br>

<Form title="Additional Details" visible={false} icon={'✏️'}>
<FormRow title="Age">
<input type="number" class="w-full bg-gray-700 color-white"
>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">Age group of the student.</div>
</FormRow>

<FormRow title="Additional Information">
<textarea class="w-full bg-gray-700 color-white" />
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">You can add any information here but keep in mind that it can be edited or deleted later on.</div>
</FormRow>

</Form>

<BtnWIcon title="Save New Student" icon='💾' fn={()=>console.log("kesa")} />
<br>

<br>
<br>
<br>
<br>
<br>








</div><!--wrapper-->
<Footer />
