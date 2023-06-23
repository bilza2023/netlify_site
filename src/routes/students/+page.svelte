<script>
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';  
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import { onMount } from 'svelte';
import ajaxGet from "$lib/js/ajaxGet.js";
import CardBtnDiv from "$lib/flexPage/CardBtnDiv.svelte";
import CardBtnDivBtn from "$lib/flexPage/CardBtnDivBtn.svelte";
import CardTitle from "$lib/flexPage/CardTitle.svelte";
import CardIcon from "$lib/flexPage/CardIcon.svelte";
import FlexBoxCard from "$lib/flexPage/FlexBoxCard.svelte";
import FlexBoxDiv from "$lib/flexPage/FlexBoxDiv.svelte";


let students = [];
onMount(async ()=>{
try {
 //  debugger;
  const resp = await ajaxGet( `${BASE_URL}/student/all`);
  if(resp.ok){
    const data = await resp.json();
    // templatesStore.set(data.surveys); 
    students = data.students;
  }else {
    toast.push("failed to load Students");
  }
 } catch (error) {
    toast.push("failed to load..");
 }
});
</script>

<Nav/>


<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">

<HdgWithIcon title="Students"  icon ="👨‍🎓"/>

<FlexBoxDiv>

{#each students as student }

  <FlexBoxCard bgColor='bg-blue-900' borderColor="border-blue-400" >
    
    <CardIcon icon={'👨‍🎓'} />   

    <CardTitle title={student.name} bgColor={'bg-blue-800'} borderColor='border-blue-300' />

    <CardBtnDiv bgColor='bg-blue-700' borderColor='border-white'>
        <CardBtnDivBtn icon={'👨'} />
        <CardBtnDivBtn icon={'👨‍🎓'} />
    </CardBtnDiv>

</FlexBoxCard> 
{/each}

</FlexBoxDiv>
</div><!--wrapper-->
<Footer />
