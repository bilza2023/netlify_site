<script>
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';  
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';

import CardBtnDiv from "$lib/flexPage/CardBtnDiv.svelte";
import CardBtnDivBtn from "$lib/flexPage/CardBtnDivBtn.svelte";
import CardTitle from "$lib/flexPage/CardTitle.svelte";
import CardIcon from "$lib/flexPage/CardIcon.svelte";
import FlexBoxCard from "$lib/flexPage/FlexBoxCard.svelte";
import FlexBoxDiv from "$lib/flexPage/FlexBoxDiv.svelte";
// import Loading from '$lib/cmp/Loading.svelte';
import { onMount } from 'svelte';
import { loadApp } from "$lib/communicator/communicator";

import { studentsStore } from '../appStore';
//-----------------------------------------------
$: students = $studentsStore; //===================== 
//-----------------------------------------------
 
onMount(async ()=>{
  try {
        // debugger;
         await loadApp();
  } catch (err){
  toast.push('Failed to load app');
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
