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
import Loading from '$lib/cmp/Loading.svelte';



import { classStore , appLoadedStore} from '../appStore';
//-----------------------------------------------
$: classObjs = $classStore; //===================== 
$: appLoaded = $appLoadedStore; //===================== 
//-----------------------------------------------

</script>

<Nav/>


<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">

<HdgWithIcon title="Classes"  icon ="🎓"/>

<FlexBoxDiv>
{#if appLoaded}
{#each classObjs as classObj }

  <FlexBoxCard bgColor='bg-blue-900' borderColor="border-blue-400" >
    
    <CardIcon icon={'🎓'} />   

    <CardTitle title={classObj.name} bgColor={'bg-blue-900'} borderColor='border-blue-300' />

    <CardBtnDiv bgColor='bg-blue-900' borderColor='border-white'>
        <CardBtnDivBtn icon={'👨'} />
        <CardBtnDivBtn icon={'👨‍🎓'} />
    </CardBtnDiv>

</FlexBoxCard> 
{/each}
{:else}
<Loading/>
{/if}
</FlexBoxDiv>



</div><!--wrapper-->
<Footer />
