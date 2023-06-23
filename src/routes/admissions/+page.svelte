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
import TagsComp from "$lib/tagsComp/TagsComp.svelte";
import ajaxPost from "$lib/js/ajaxPost.js";


function addProductTags(tag){
       student.tags = [...student.tags, tag];
      //  console.log("student.tags",student.tags);
}
function removeProductTags(id) {
  student.tags = student.tags.filter(tag => tag._id !== id);
}


let student = {
      id   : 0,
      name : "",
      age  : 0,
      email  : "",
      password  : 12345,
      description : "",
      tags : []
}



async function save(){
  // try {
//   debugger;
  // student.id = uuid();
      const resp = await ajaxPost(`${BASE_URL}/student/save`,{student});
            // debugger;
                if (resp.ok == true) {
                const data = await resp.json();
                student.id = 0;
                student.name = '';
                student.age = 0;
                      toast.push("Student saved");
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

<HdgWithIcon title="Add A Student" , icon ="🗃️"/>

<br>

<Form title="Basic Details" visible={true} icon={'✏️'}>
<FormRow title="Registeration Number">
<input type="number" class="w-full bg-gray-700 color-white"
bind:value={student.id}
>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">You can add any Numerical value as registeration number as long as it is a valid number and it is unique among all the students. No two students can have the same registeration number. No symbols, chracters are allowed just numbers.</div>
</FormRow>

<FormRow title="Name">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={student.name}
>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">This can be edited later.</div>
</FormRow>


<FormRow title="Tags">
<TagsComp tags={student.tags} {addProductTags} {removeProductTags}/>

<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">
Add tags to this product..</div>
</FormRow>

</Form>




<br>






<Form title="Additional Details" visible={false} icon={'✏️'}>

<FormRow title="Age">
<input type="number" class="w-full bg-gray-700 color-white"
bind:value={student.age}>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">Age group of the student.</div>
</FormRow>
<FormRow title="Email">
<input type="email" class="w-full bg-gray-700 color-white"
bind:value={student.email}>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">Please provide a valid email address, it may be used for communication.</div>
</FormRow>

<FormRow title="Password">
<input type="string" class="w-full bg-gray-700 color-white"
bind:value={student.password}>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">This password will be used by the student to enter his exams / tests. It can be changed at any time. Do not use spaces in password.</div>
</FormRow>

<FormRow title="Description">
<textarea class="w-full bg-gray-700 color-white" 
bind:value={student.description}/>
<div class="m-1 p-2 rounded-md bg-gray-900 text-yellow-400 text-xs">You can add any information here but keep in mind that it can be edited or deleted later on.</div>
</FormRow>

</Form>

<br>
<BtnWIcon title="Save New Student" icon='💾' fn={save} />
<br>

<br>
<br>
<br>
<br>








</div><!--wrapper-->
<Footer />
