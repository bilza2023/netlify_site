<script>
import { SvelteToast } from '@zerodevx/svelte-toast'
import './styles.css';

import { templatesStore,testsStore,runsStore,studentsStore ,classStore,appStateStore,appLoadedStore} 
from './appStore.js';
import { toast } from '@zerodevx/svelte-toast';

import { loadApp } from "../lib/communicator/communicator";

// $: templates = $templatesStore; 
// $: tests = $testsStore; 
// $: runs = $runsStore; 
// $: students = $studentsStore; 
// $: classObj = $classStore; 
$: appLoaded = $appLoadedStore; 


import { onMount } from 'svelte';
onMount(async ()=>{
    try {
    // debugger;
    // toast.push('initial data load..');
    await loadApp();
        // console.log("templates",templates );
        // console.log("tests",tests );
        // console.log("runs",runs );
        // console.log("students",students );
        // console.log("classes",classObj );
        // console.log("appState",appState );
        if (appLoaded == true){
        toast.push('App data loaded' ,{ duration: 600 });
        }
    
    } catch(err){
        toast.push('Failed to load data');
    } 
});


</script>
<SvelteToast />

<slot></slot>