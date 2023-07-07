<script>
import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import Cards from "./tests/Cards.svelte";
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import Loading from '../../lib/cmp/Loading.svelte';
import { toast } from '@zerodevx/svelte-toast';
import { testsStore , appLoadedStore} from '../mainStore.js';

//---------------------------------------------|
$: tests = $testsStore;          //============| 
$: appLoaded = $appLoadedStore; //=============| 
//---------------------------------------------|
</script>


<div class="bg-gray-800"><!--page div-->
<Nav />

 
<HdgWithIcon title="Tests" , icon ="🧪" bgColor='bg-green-800'/>
{#if appLoaded}
            
<div class="bg-gray-800 w-full">            
<Cards quizzes={tests} urlTag={"edit"} />
</div>  
{:else}
<Loading />        
{/if}

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<Footer />
</div>