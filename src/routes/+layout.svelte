<script>
import { SvelteToast } from '@zerodevx/svelte-toast'
import './styles.css';

import { templatesStore,testsStore,runsStore,studentsStore ,classStore,appStateStore,appLoadedStore} 
from './appStore.js';
import { toast } from '@zerodevx/svelte-toast';


// $: templates = $templatesStore; 
// $: tests = $testsStore; 
// $: runs = $runsStore; 
// $: students = $studentsStore; 
// $: classObj = $classStore; 
$: appLoaded = $appLoadedStore; 

// import { onMount } from 'svelte';
// onMount(async ()=>{
//     // try {
//         // debugger;
//     //  await loadApp();
    
 
// });


</script>
<SvelteToast />

<slot></slot>